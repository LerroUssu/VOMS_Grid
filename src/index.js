import { changeThatSvg } from './changeThatSvg.js'

const source = document.querySelector('div.cell')

const max = 11;
for (let index = 0; index < max; index++) {
    const clone = source.cloneNode(true)
    document.querySelector('main').append(clone)
}

// color of the icons 
const getRandomColor = () => {
    if (Math.random() < 0.5) {

       
        return '#FF807D'

    } 
    else if (Math.random() < 0.4) 
    {
        return '#BDECF1'
    }
    else 
    {
        return '#FCE579'
    }
}

const cells = document.querySelectorAll('div.cell')
for (const cell of cells) {
    const object = cell.querySelector('object')
    object.onload = () => {
        const svg = object.contentDocument.querySelector('svg')
        changeThatSvg(svg)
    }

    const div = cell.querySelector('div')
    const index = Math.ceil(3 * Math.random())
    div.className = 'icon-forme-' + index
    div.style.color=getRandomColor()
    div.style.textShadow = '0px 3px 2px black';

    const x = 37.5;
    const y = 37.5;
    div.style.transform = `translate(${x}px, ${y}px)`
}
