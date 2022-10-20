// Função Fábrica / cria coisa mais rapido do que definir manualmente
//nesse exemplo a funcao cria uma pessoa, atribui o nome, sobrenome, altura, e peso, e calcula e diz o imc (indice de massa corporal)

function criaPessoa(nome, sobrenome, a, p){
  return {
    nome,
    sobrenome,
    //getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    },

    //fala(assunto) é um metodo
    fala(assunto){
      // this é o p1 nesse caso, porque é ele que esta chamando a funcao fala()
      return `${this.nome} esta ${assunto}`
    },

    altura: a,
    peso: p,
    
    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift(); // .shift remove o primeiro valor no caso o nome
      this.sobrenome = valor.join('') // join junta o nome com o sobrenome na mesma string

      console.log(valor);
    }, // isso é um array agora

    //get = Getter
    get imc(){
      // colocando get o imc passa a fingir ser um atributo do metodo e nao mais uma funcao
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2); 
    } 
  };
}

const p1 = criaPessoa('Cauan', 'Zelazowski', 1.9, 56);
console.log(p1.imc) // voce tem que tirar os parenteses do imc porque ele esta fingindo nao ser uma funcao

console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('Mandando voce tomar no c$'))
//objeto chamando o metodo, no caso, this se refere ao objeto que esta chamando no caso p1




//exemplo melhor

function criaCelular(marcaCelular, tamanhoTela, capacidadeBateria){
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}

const celular1 = criaCelular('Samsung',8,7,5000)
console.log(celular1)