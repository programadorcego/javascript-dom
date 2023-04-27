/*
O método getComputedStyle() obtém as propriedades CSS computadas e os valores de um elemento HTML.
O método getComputedStyle() retorna um objeto CSSStyleDeclaration.
O estilo calculado é o estilo usado no elemento depois que todas as fontes de estilo foram aplicadas.
Fontes de estilo: folhas de estilo externas e internas, estilos herdados e estilos padrão do navegador.
*/

let texto = document.querySelector('.text');
let cssStyle = getComputedStyle(texto);

texto.style.fontSize = `${parseInt(cssStyle.fontSize) * 2}px`;