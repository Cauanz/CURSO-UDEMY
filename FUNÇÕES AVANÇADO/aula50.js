// a funcao definida com a palavra function tem uma variavel especial que guarda todos os argumentos enviados 
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

function funcaomais({ nome, sobrenome, idade}){
  console.log(nome, sobrenome, idade);
}
funcaomais({nome: 'cauan', sobrenome: 'zelazowski', idade: 17})

//                                   ... significa resto, todos os numeros que sobraram vao para o 'numeros' e só pode ser o ultimo parametro da funcao
function conta(operador, acumulador, ...numeros){
  for(let numero of numeros){
    if (operador === '+')acumulador += numero;
    if (operador === '-')acumulador -= numero;
    if (operador === '*')acumulador *= numero;
    if (operador === '/')acumulador /= numero;
  }
  console.log(acumulador)
}
conta('+', 0, 10, 20, 30)