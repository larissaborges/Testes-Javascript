//Constructor function 1 

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
    console.log (nome + ' andou');
    }
}

const larissa = new Pessoa('Larissa', 20);
const matheus = new Pessoa('Matheus', 23);
const gabriel = new Pessoa('Gabriel', 24);

//Constructor function 2 (Adiciona classe à cada elemento da lista)
function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
          element.classList.add(classe); 

        })    
    }
}
const listaItens = new Dom('li');
const ul = new Dom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar-ul');

