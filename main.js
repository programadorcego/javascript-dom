let container = document.querySelector('.container');
let novoElemento = document.createElement('p');
novoElemento.innerText = 'Meu Texto';

// Inserindo antes
//container.before(novoElemento);

// Inserindo Depois
//container.after(novoElemento);

// Inserir no começo do container
//container.prepend(novoElemento);

// Inserindo no final do container
container.append(novoElemento);