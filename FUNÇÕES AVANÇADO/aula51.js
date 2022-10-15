//funcao que cria uma pessoa, passando os parametros nome e sobrenome
function criaPessoa(nome, sobrenome) {
  return {nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otavio');

//Isso aqui é inutil porque voce ja tem uma funcao para criar as pessoas em ves de ficar criando uma por uma
const p2 = {
  nome: 'Joao',
  sobrenome: 'Oliveira'
}
console.log(p1)



function duplica(n) {
  return n * 2;
}

function triplica(n) {
  return n * 3;
}

console.log(duplica(2));