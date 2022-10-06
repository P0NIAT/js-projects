const up = document.querySelector('.sizeUp')
const down = document.querySelector('.sizeDown')
const newColor = document.querySelector('.color')
const par = document.querySelector('p')

let fontSize = 36

const fun1 = () => {
    if(fontSize >= 72) return
    fontSize += 4
    par.style.fontSize = fontSize + 'px'
    console.log(fontSize);
}

const fun2 = () => {
    if(fontSize <= 12) return
    fontSize -= 4
    par.style.fontSize = fontSize + 'px'
    console.log(fontSize);
}

const fun3 = () => {

const red = Math.floor(Math.random() * 255)
const green = Math.floor(Math.random() * 255)
const blue = Math.floor(Math.random() * 255)
console.log('red:', red);
console.log('green:', green);
console.log('blue:', blue);

    par.style.color = `rgb(${red},${green},${blue})`
}

up.addEventListener('click', fun1)
down.addEventListener('click', fun2)
newColor.addEventListener('click', fun3)