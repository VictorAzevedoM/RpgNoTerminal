import controle from 'prompt-sync'
import Personagem from './personagem'

let control = controle()
let option = 0

let zaralho = new Personagem('Zaralho', 100, 100, 75, 250)

while (option != 9) {
  console.log('#=========Personagem========#')
  console.log('1. Treinar Ataque')
  console.log('2. Treinar Defesa')
  console.log('3. Descansar')
  console.log('4. Entrar em batalha')
  console.log('8. Imprimir Atributos')
  console.log('9. Sair')
  console.log('#===========================#')

  option = +control('Escolha uma ação: ')

  switch (option) {
    case 1:
      zaralho.treinarAtaque()
      zaralho.apresentarStatus()
      break
    case 2:
      zaralho.treinarDefesa()
      zaralho.apresentarStatus()
      break
    case 3:
      zaralho.descansar()
      zaralho.apresentarStatus()
      break
    case 4:
      zaralho.batalhar(option)
      zaralho.apresentarStatus()
      break
    case 8:
      zaralho.apresentarStatus()
    default:
      break
  }
}
