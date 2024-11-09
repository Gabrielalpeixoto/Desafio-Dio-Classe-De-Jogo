// Class do Heroi com o nome, idade e classe
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome     // escolher o nome do herói
      this.idade = idade   // escolher a idade do herói
      this.tipo = tipo     // escolher a classe do herói (guerreiro, mago, monge, ninja)
    }
  
    // Função para definir o ataque do Herói
    atacar() {
      let ataque = ''
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia'
          break
        case 'guerreiro':
          ataque = 'espada'
          break
        case 'monge':
          ataque = 'artes marciais'
          break
        case 'ninja':
          ataque = 'shuriken'
          break
      }
  
      // Mansagem de saída
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
 
// Criando objetos para os tipos de heróis, podendo alterar o nome, idade e a classe do herói
    const heroi1 = new Heroi('nome', 0, 'guerreiro');
    const heroi2 = new Heroi('nome', 0, 'mago');
    const heroi3 = new Heroi('nome', 0, 'monge');
    const heroi4 = new Heroi('nome', 0, 'ninja');

// Imprimindo o método de atacar para cada herói
    heroi1.atacar();  // Guerreiro atacou usando espada
    heroi2.atacar();  // Mago atacou usando magia
    heroi3.atacar();  // Monge atacou usando artes marciais
    heroi4.atacar();  // Ninja atacou usando shuriken