document.querySelector('.form').addEventListener('submit', e => {
	e.preventDefault();
	
	let nome = document.querySelector('#nome');
	
	document.querySelector('.texto').textContent = `Meu nome é ${nome.value}`;
});