let randomNum = Math.floor(Math.random() * 100 + 1)

const submitbtn = document.getElementById("btn")
const userInput = document.getElementById("guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".results")

const p = document.createElement("p")

let prevGuess = []
let numOfGuess = 1

let playGame = true

if (playGame) {
    submitbtn.addEventListener("click", function (e) {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess < 1) {
        alert("please enter a number more than 1")
    } else if (guess > 100) {
        alert("please enter a number less than 100")
    } else {
        prevGuess.push(guess)
        if (numOfGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage("You guessed it right")
        endGame()
    } else if (guess < randomNum) {
        displayMessage("Number is too low")
    } else if (guess > randomNum) {
        displayMessage("Number is too high")
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numOfGuess++
    remaining.innerHTML = `${11 - numOfGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    document.querySelector("#newGame").addEventListener("click", function () {
        randomNum = Math.floor(Math.random() * 100 + 1)
        prevGuess = []
        numOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = ''
        playGame = true
    })
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    console.log(p)
    p.innerHTML = `<h2 id="newGame">Start new game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}