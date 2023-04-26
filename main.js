/*
No JavaScript é possível selecionarmos elementos HTML com base no seletor CSS.
Os métodos para isso são:
1. `document.querySelector(seletorCSS)`: retorna o primeiro elemento que corresponde a um seletor CSS especificado.
2. `document.querySelectorAll(seletorCSS)`: retorna uma lista de todos os elementos que correspondem a um seletor CSS especificado.
*/

//let element = document.querySelector('.text');
//console.log(element);

let element = document.querySelectorAll('#main p.text');
console.log(element);

element[0].innerText = "Outro Texto";