/*
No JavaScript também é possível manipularmos as classes CSS de um elemento HTML.
Para isso utilizamos as propriedades:
1. className: retorna ou define a lista de classes CSS de um elemento HTML como uma string.
2. classList: retorna um objeto que representa a lista de classes CSS de um elemento HTML. Podemos usar métodos como `add()`, `remove()`, `toggle()`, `contains()` e `replace()` para adicionar, remover, alternar, verificar e substituir classes específicas.
*/

let element = document.querySelector('.container');
//console.log(element.className);

//console.log(element.classList);

element.classList.remove('container-dark');
element.classList.add('container-light');
console.log(element.classList.contains('container-light'));
element.classList.toggle('invisivel');