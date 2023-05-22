/*
A partir do HTML existente, receber um número como valor de entrada.
Calcular e informar seus vizinhos ou seja,
o antecessor e o sucessor.
*/

document.querySelector('.btn').addEventListener('click', () => {
	const numero = document.querySelector('#numero');
	
	document.querySelector('.antecessor').textContent = Number(numero.value) - 1;
	document.querySelector('.sucessor').textContent = Number(numero.value) + 1;
});