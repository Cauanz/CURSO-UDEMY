//declarar funcao
function funcao(){
  console.log("sou uma funcao")
};
funcao();

//function express
const SouUmDado = function() {
  console.log("sou um dado")
}
SouUmDado();

//Arrow function       \/ esse é o arrow ('=>')
const funcaoarrow = () => {
  console.log("sou uma arrow function")
}
funcaoarrow();

// dentro de um objeto pode ter uma funcao
const obj = {
  falar() {
    console.log("oi")
  }

}
obj.falar()