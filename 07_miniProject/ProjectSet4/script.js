let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

validateGuess = (guess) => {
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert(`Please enter a valid number `)
    }

    else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

checkGuess = (guess)=>{
    if(guess === randomNumber){
        displayMsg(`You Guessed it Right`)
        endGame()
    }
    else if (guess < randomNumber){
        displayMsg(`Number is too Low`)
    }
    else if (guess > randomNumber){
        displayMsg(`Number is too High`)
    }
}

displayGuess = (guess)=>{
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

displayMsg = (msg)=>{
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

endGame = ()=>{
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'>Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

newGame = ()=>{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}   

