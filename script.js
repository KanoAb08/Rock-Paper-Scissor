const displayUserchoice = document.getElementById('Userchoice')
const displayComputerchoice = document.getElementById('Computerchoice')
const displayResult = document.getElementById('Result')
const Possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice
let result

Possiblechoices.forEach( pc => pc.addEventListener('click',(e) => {
    userchoice = e.target.innerHTML
    displayUserchoice.innerHTML = userchoice
    getComputerChoice()
    getResult()
}))

function getComputerChoice(){

    let randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
    if(randomNumber == 1){
        computerchoice = 'Rock'
    }
    if(randomNumber == 2){
        computerchoice = 'Paper'
    }
    if(randomNumber == 3){
        computerchoice = 'Scissor'
    }
    displayComputerchoice.innerHTML = computerchoice
}

function getResult(){
    if(userchoice == computerchoice){
        result = 'It is a tie'
    }
    if(userchoice == 'Rock' && computerchoice == 'Paper'){
        result = 'You Lost'
    }
    if(userchoice == 'Rock' && computerchoice == 'Scissor'){
        result = 'You Win'
    }
    if(userchoice == 'Paper' && computerchoice == 'Rock'){
        result = 'You Win'
    }
    if(userchoice == 'Paper' && computerchoice == 'Scissor'){
        result = 'You Lost'
    }
    if(userchoice == 'Scissor' && computerchoice == 'Rock'){
        result = 'You Lost'
    }
    if(userchoice == 'Scissor' && computerchoice == 'Paper'){
        result = 'You Win'
    }

    displayResult.innerHTML = result
}