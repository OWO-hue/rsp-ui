const button = document.querySelector('#btn')

button.addEventListener('click',(e)=>e.target.style.background = 'blue')

const array = new Array()
let string = "aa"
window.addEventListener('keydown',(e) => {
    string += toString(e.keyCode)
    array.push(e.keyCode)
})

const container = document.querySelector('#container')

container.setAttribute('style','color:blue; font-size: 15px; background-color: pink; border: 4px solid black;')
for (entry of array) {
    container.textContent = entry
}