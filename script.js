const rock = document.createElement('button')
rock.setAttribute('style','width: 100px; height: 100px;')
rock.textContent = 'ROCK'

const sci = document.createElement('button')
sci.setAttribute('style','width: 100px; height: 100px;')
sci.textContent = 'SCISSOR'

const paper = document.createElement('button')
paper.setAttribute('style','width: 100px; height: 100px;')
paper.textContent = 'PAPER'

const here = document.querySelector('#here')


const div2 = document.createElement('div')
div2.setAttribute('style','font-size: 20px')


const computerAI = (array) => {
    const [player, computer] = array
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
        here.textContent = 'YOU WON!'
    }
    if (lose) {
        document.getElementById('here').innerHTML = 'YOU LOST!'
        console.log('YOU LOST!')
        here.textContent = 'YOU LOST!'
    }
    if (tie) {
        document.getElementById('here').innerHTML = 'IT"S A TIE!'
        console.log('IT"S A TIE!')
        here.textContent = 'DRAW!'
    }
    div2.innerText = `YOU: ${player}\n
    COMPUTER: ${computer}`

}

const fight = input => {
    const rsp = ['rock','scissor','paper']
    const AI = rsp[Math.floor(Math.random()*3)].toUpperCase()
    return computerAI([input,AI])
}



rock.addEventListener('click',(e) => fight(e.target.innerText))
sci.addEventListener('click',(e) => fight(e.target.innerText))
paper.addEventListener('click',(e) => fight(e.target.innerText))


container.appendChild(rock)
container.appendChild(sci)
container.appendChild(paper)

container.setAttribute('style','color:blue; font-size: 15px; background-color: pink; border: 4px solid black;')

const results = document.querySelector('#results')
results.appendChild(div2)