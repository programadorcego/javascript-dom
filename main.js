/*
A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.
O valor nunca poderá ser inferior a -10 ou superior a 10.
*/

let valor = 0;

function incrementar(){
	if(valor < 10) document.querySelector('.valor').innerText = ++valor;
}

function decrementar(){
	if(valor > -10) document.querySelector('.valor').innerText = --valor;
}

document.querySelector('.incremento').addEventListener('click', incrementar);
document.querySelector('.decremento').addEventListener('click', decrementar);