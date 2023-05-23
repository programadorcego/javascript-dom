/*
A partir do HTML existente, ler o valor total de uma conta de uma pizzaria 
e quantos clientes vão pagá-la.
Calcule e informe o valor a ser pago por cliente.
*/

document.querySelector('.btn').addEventListener('click', () => {
	const total = document.querySelector('#total');
	const clientes = document.querySelector('#clientes');
	let total_cliente = parseFloat(total.value.replace(',', '.')) / parseInt(clientes.value);
	
	document.querySelector('.resultado').innerHTML = `
		<p>Valor da Conta: R$ ${parseFloat(total.value.replace(',', '.')).toFixed(2).replace('.', ',')}</p>
		<p>Número de Clientes: ${clientes.value}</p>
		<p>Valor por Cliente: R$ ${total_cliente.toFixed(2).replace('.', ',')}</p>
	`;
});