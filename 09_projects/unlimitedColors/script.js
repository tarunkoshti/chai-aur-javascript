const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const body = document.querySelector("body")

console.log("hello moto")

// const getRandomColor = function(){
//     let red = Math.floor(Math.random() * 256)
//     let green = Math.floor(Math.random() * 256)
//     let blue = Math.floor(Math.random() * 256)
//     return `rgb(${red},${green},${blue})`
// }

const getRandomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random() * 16)
        color += hex.charAt(randomIndex)
    }
    return color
}

const chnageBG = function(){
    console.log("CHANGEBG")
    body.style.backgroundColor = getRandomColor() 
}

let intervalId;

const startHandler = function(){
    console.log("START")
    if(intervalId == null){ // this condition will not execute setInterval again if alreadly other one is running if you not you this condition and try to click start button while other setInterval is already running then one more setInterval start executing and if you do this then multiple setIntervals run and then you can not stop them using stop button because you have lost that previous intervalIds and stop button only can stop or clear current Interval. 
        intervalId = setInterval(chnageBG, 1000)
    }
}

const stopHandler = function(){
    console.log("STOP")
    clearInterval(intervalId) 
    intervalId = null

}

startBtn.addEventListener('click', startHandler)
stopBtn.addEventListener('click', stopHandler)