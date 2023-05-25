/*
O método `addEventListener()` é usado para anexar um event handler a um elemento HTML, a fim de capturar e lidar com eventos específicos,
como cliques do mouse, pressionamentos de tecla, submissões de formulários, etc.
*/

document.querySelector('button').addEventListener('click', function(){
	//alert('O botão foi clicado');
	
	document.querySelector('p').innerText = "O texto foi alterado";
});