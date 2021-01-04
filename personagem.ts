// Classe
export default class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}

  apresentarStatus(): void {
    console.log('Guerreiro: ', this.nome)
    console.log('Vida ', this.vida.toFixed(1))
    console.log('Energia: ', this.energia.toFixed(1))
    console.log('Ataque: ', this.ataque.toFixed(1))
    console.log('Defesa: ', this.defesa.toFixed(1))
  }
  treinarAtaque() {
    this.ataque += Math.random() * 5
    this.energia -= Math.random() * 10
    if (this.energia <= 0) {
      console.log('Melhor você descansar')
      this.apresentarStatus()
    }
  }
  treinarDefesa() {
    this.defesa += Math.random() * 5
    this.energia -= Math.random() * 10
    if (this.energia <= 0) {
      console.log('Melhor você descansar')
      this.apresentarStatus()
    }
  }
  descansar() {
    this.energia += Math.random() * 20
  }
  batalhar(resultado: number) {
    this.vida -= Math.random() * 100
    this.energia -= Math.random() * 100
    if (this.vida <= 0) {
      resultado = 9
      this.apresentarStatus()
      console.log('Fim de jogo')
    } else if (this.energia <= 0) {
      console.log('Melhor você descansar')
      this.apresentarStatus()
    }
  }
}
