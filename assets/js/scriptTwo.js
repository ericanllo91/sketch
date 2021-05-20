const body = document.querySelector('body');
const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv')
body.appendChild(mainDiv)
let button = document.createElement('button');
button.textContent = 'CHANGE SIZE GRID'
body.insertBefore(button, mainDiv);
let buttonBlack = document.createElement('button');
buttonBlack.textContent = 'RESET CANVAS'
body.insertBefore(buttonBlack, mainDiv);
let buttonWhite = document.createElement('button');
buttonWhite.textContent = 'COLOUR - RNDM'
body.insertBefore(buttonWhite, mainDiv);


for (let i =0; i <16; i++){
    let divs = document.createElement('div');
    divs.classList.add(`basicDiv'${i}'`)
    mainDiv.appendChild(divs);

}


let reset = () => {
    console.log(mainDiv)
    let divs = document.querySelectorAll('.mainDiv > *');
    divs.forEach(div => div.remove())

    let squares = window.prompt("How many squares ")
    // -- > CREATE GRID
    let solArray = []
    for (let i = 100; i>1; i--){
        if (Math.sqrt(squares) % 1 === 0){
            solArray.push(Math.sqrt(squares))
        }
        else if (squares % i === 0) {
            if (i > Math.floor(Math.sqrt(squares))) {
                solArray.push(i)
            }
        }
    }
    let solutionH = solArray.pop()
    let solutionW = squares / solutionH
    // --> Get the closest percentage of the size I want for H and width
    let solH = 100 /solutionH
    let solW = 100 / solutionW
    console.log(solH,solW)


    // --> Create the new sketch
    for (let i = 0; i < squares; i++){
        let basicDiv = document.createElement('div');
        basicDiv.classList.add(`basicDiv'${i}'`)
        basicDiv.style.width = solW+'%'
        basicDiv.style.background = 'black'
        basicDiv.style.height = solH+'%'
        mainDiv.appendChild(basicDiv);
    }
    let divs2 = document.querySelectorAll('.mainDiv > *');
    divs2.forEach(div => div.addEventListener('mouseover', changeColor));



}

let changeColor = e => {

    e.target.style.background ='white'
}

let white = e => {
    let num1 = Math.floor((Math.random() * 255) + 1);
    let num2 = Math.floor((Math.random() * 255) + 1);
    let num3 = Math.floor((Math.random() * 255) + 1);
    let num4 = 1
    let kolor = `rgba(${num1},${num2},${num3},${num4})`
    e.target.style.background = kolor


}

let changeColorBlack = e => {
    let divs = document.querySelectorAll('.mainDiv > *');
    divs.forEach(div => div.style.background ='black');
}

let changeColorWhite = e => {
    let divs = document.querySelectorAll('.mainDiv > *');
    divs.forEach(div => div.addEventListener('mouseover', white));
}


button.addEventListener('click', reset);
buttonBlack.addEventListener('click', changeColorBlack);
buttonWhite.addEventListener('click', changeColorWhite);

let divs = document.querySelectorAll('.mainDiv > *');
divs.forEach(div => div.addEventListener('mouseover', changeColor));













/*


 */