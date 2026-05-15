// 1. Seletores obrigatórios (formulário e campos de input)
const formPost = document.querySelector('#post-form');
const tituloPost = document.querySelector('#titulo-post');
const conteudoPost = document.querySelector('#conteudo-post');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

// 2. Evento de submit no formulário para capturar o envio dos dados e realizar a requisição POST para a API exatamente como exigido no desafio
formPost.addEventListener('submit', function(event) {
    
    // 2.3 Prevenir comportamento padrão do formulário para evitar recarregamento da página e permitir o envio via JavaScript
    event.preventDefault();

    // 2.4 Estrutura de envio exata exigida pelo desafio - Criando um objeto com os dados do post a ser enviado para a API - O título e o conteúdo são capturados dos campos de input, e o userId é fixo como 1 conforme exigido 
    const data = {
        title: tituloPost.value,
        body: conteudoPost.value, 
        userId: 1
    };

    // Configurações exatas do Fetch para POST - Método POST, corpo da requisição em JSON, e cabeçalho indicando o tipo de conteúdo 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(dadosDaAPI) {
        // Renderização: Preenchendo o HTML com o retorno da API - O título e o conteúdo do post retornados pela API são exibidos na página, substituindo o conteúdo anterior dos elementos de renderização
        tituloRenderizar.innerHTML = dadosDaAPI.title;
        conteudoRenderizar.innerHTML = dadosDaAPI.body;

        // Limpa os campos após postar (opcional, mas bom para usabilidade) - Após o post ser enviado e renderizado, os campos de input são limpos para permitir a criação de um novo post sem a necessidade de apagar manualmente os campos
        tituloPost.value = '';
        conteudoPost.value = '';
    });
});