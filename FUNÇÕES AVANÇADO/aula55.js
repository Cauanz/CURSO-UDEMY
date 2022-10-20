// IIFE - Immediatly invoked function expression / expressao de funcao imediatamente invocada

//essa funcao toca o escopo global por ter nome
function escreve() {
  console.log(2222)
}
escreve();

//essa funcao nao toca nada de fora nem o escopo global
(function() {
  let nome = 'Cauan';
})();
//as duas variaveis nao se tocam e nao se modificam porque uma esta na funcao e outra esta fora
let nome = 'Joao';

//ex:
(function() {
  //pode colocar qualquer coisa dentro desta funcao
  function falanome(){
    console.log('Cauan');
  }
 falanome();
})();//e aqui ela sera imediatamente chamada 

//Outro exemplo:
//para criar uma IIFE basta criar uma funcao anonima dentro de parenteses (function()) <- assim
(function(n1, n2, n3){
  return n1 * n2 * n3
})(1, 3, 4);// <- aqui eu ja estou chamando a funcao anonima e passando os 3 paramentros