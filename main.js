/*
No JavaScript também é possível acessar, alterar ou remover atributos de elementos HTML.
Para isso utilizamos os métodos:
1. `getAttribute(nomeDoAtributo)`: retorna o valor de um atributo específico de um elemento HTML.
2. `setAttribute(nomeDoAtributo, valor)`: define o valor de um atributo específico em um elemento HTML.
3. `hasAttribute(nomeDoAtributo)`: verifica se um elemento HTML tem um atributo específico.
4. `removeAttribute(nomeDoAtributo)`: remove um atributo específico de um elemento HTML.
5. `attributes`: retorna uma coleção com todos os atributos de um elmento HTML.
*/
element = document.getElementById('link');

// Recuperando valor de atributo
console.log(element.getAttribute('href'));

// Adicionando um atributo
element.setAttribute('target', '_blank');

// Removendo Atributo
//element.removeAttribute('href');

// Verificando se atributo existe
//console.log(element.hasAttribute('class'));

// Retornando todos os atributos
console.log(element.attributes);