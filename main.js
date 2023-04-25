/*
O dom (Document Object Model) em JavaScript é uma representação da estrutura em árvore de um documento HTML.
Ele permite que o JavaScript acesse e manipule elementos em uma página web de forma dinâmica, o que significa que o conteúdo pode ser adicionado, removido ou modificado sem precisar recarregar a página inteira.
O dom é formado por nós (nodes), que podem ser elementos HTML, atributos, texto, comentários, entre outros.
Cada nó possui propriedades e métodos que podem ser acessados pelo JavaScript para alterar o conteúdo e o comportamento da página.
O dom é uma parte fundamental da programação web em JavaScript e permite a criação de páginas dinâmicas e interativas.
*/

let element = document;

// Retornando os elementos do <body</body>
//console.log(element.body);

// Retornando os elementos do <head</head>
//console.log(element.head);

// Retornando os elementos do <html</html>
console.log(element.documentElement);