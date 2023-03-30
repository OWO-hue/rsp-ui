const text = 'Hello World it"s a me!'

document.getElementById('here').innerHTML = text

const RSP = num => {
    if (0 < num && num < 1) return 'rock'
    else if (1 < num && num < 2) return 'paper'
    else if (2 < num && num < 3) return 'scissor'
}
const computerAI = (array) => {
    const random = Math.random() * 3
    const player = prompt('Rock Scissor, Paper! Your input: ')
    const computer = RSP(random)
    const win = (player.toUpperCase() === 'ROCK' && computer.toUpperCase() === 'SCISSOR') ||
    (player.toUpperCase() === 'SCISSOR' && computer.toUpperCase() === 'PAPER') ||
    (player.toUpperCase() === 'PAPER' && computer.toUpperCase() === 'ROCK')
    const lose = (player.toUpperCase() === 'PAPER' && computer.toUpperCase() === 'SCISSOR') ||
    (player.toUpperCase() === 'ROCK' && computer.toUpperCase() === 'PAPER') ||
    (player.toUpperCase() === 'SCISSOR' && computer.toUpperCase() === 'ROCK')
    const tie = (player.toUpperCase() === 'SCISSOR' && computer.toUpperCase === 'SCISSOR') ||
    (player.toUpperCase() === 'PAPER' && computer.toUpperCase() === 'PAPER') ||
    (player.toUpperCase() === 'ROCK' && computer.toUpperCase() === 'ROCK')
     
    console.log(player,computer)
    if (win) {
        document.getElementById('here').innerHTML = 'YOU WON!'
        console.log('YOU WON!')
        let [player, computer] = array
        player++
        return [player, computer]
    }
    if (lose) {
        document.getElementById('here').innerHTML = 'YOU LOST!'
        console.log('YOU LOST!')
        let [player, computer] = array
        computer++
        return [player, computer]
    }
    if (tie) {
        document.getElementById('here').innerHTML = 'IT"S A TIE!'
        console.log('IT"S A TIE!')
        return array
    }
    else {
        prompt('Wrong input! Choose between a rock, a scissor,and a paper : ')
        computerAI(player)
    }
}

const game = () => {
    let scores = [0,0]
    for (let i = 0; i < 5; i++) {
        scores = computerAI(scores)

    }
    let [player, computer] = scores
    console.log(scores)
    if (player > computer) return console.log("you're the final winner!")
    if (player = computer) return console.log("the computer is the winner!")
    if (player < computer) return console.log("nobody wins!")
}

game()