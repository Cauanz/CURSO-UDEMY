//escopo global
function retornaFuncao(nome){
  return function() {
    return nome;
  };
}

//os parametros das duas funcoes nao vai mais mudar
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');
console.log(funcao);
console.log(funcao2);