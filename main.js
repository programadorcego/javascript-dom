/*
A partir do HTML existente, ler o preço de um produto de uma loja 
e informar as opções de pagamento da loja.
Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
*/

document.querySelector('.btn').addEventListener('click', () => {
	const preco = document.querySelector('#preco');
	
	let vista = parseFloat(preco.value.replace(',', '.')) - (parseFloat(preco.value.replace(',', '.')) * 0.1);
	let parcela = parseFloat(preco.value.replace(',', '.')) / 3;
	
	document.querySelector('.resultado').innerHTML = `
		<p>Preço: R$ ${parseFloat(preco.value.replace(',', '.')).toFixed(2).replace('.', ',')}</p>
		<p>A Vista: R$ ${vista.toFixed(2).replace('.', ',')}</p>
		<p>ou 3x de R$ ${parcela.toFixed(2).replace('.', ',')}</p>
	`;
});