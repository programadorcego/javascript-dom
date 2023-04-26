let container = document.querySelector('.container');

// Criando Elementos
let article = document.createElement('article');
article.setAttribute('class', 'article');
article.innerHTML = '<h1>Título do Artigo</h1>';
article.innerHTML += '<p>Texto do Artigo</p>';

// Adicionando Elemento
container.appendChild(article);