


// color for the boxes 

    const getRandomColor = () => {
    if (Math.random() < 0.5) {

       
        return '#40BBAF'

    } else if (Math.random() < 0.5) {

        return '#FFEEB2'
    }else {
        return '#FFFFFF'
    }
}

export const changeThatSvg = (svg) => {

     // attribut --> SVG use : "setAttributeNS"

    const rects = svg.querySelectorAll('rect')
    for (const rect of rects) {

        const color = getRandomColor()
        rect.setAttributeNS(null, 'fill', color)
    }
}
