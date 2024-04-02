// console.log(document.getElementById("title"))
// console.log(document.getElementsByClassName("heading"))
// console.log(document.querySelector("#title"))


// console.log(document.getElementById("title").getAttribute("class"))
// console.log(document.getElementById("title").setAttribute("class", "test"))
// console.log(document.getElementById("title").setAttribute("class", "test heading"))


const title = document.getElementById("title")
title.style.color = "red"
title.style.backgroundColor = "black"

// console.log(document.body.innerHTML)
// console.log(document.body.textContent)
// console.log(document.body.innerText)

// console.log(title.innerHTML)
// console.log(title.textContent)
// console.log(title.innerText)

console.log(document.querySelector("input[type='text']"))

console.log(document.querySelector("ul li:first-child"))
document.querySelector("ul li:first-child").style.color = "green"
document.querySelector("ul li:first-child").innerText = "first"

// console.log(document.querySelectorAll("li")) // get node list

let li = document.querySelectorAll("li")
// li.map((item)=> console.log(item))   // error because node-list not array

li.forEach((item) => console.log(item)) // because node-list have foreach method in his
// prototype

li[1].style.color = "pink"


let list = document.getElementsByClassName("list-item")
console.log(list)                        // get html-collection and it doesn't have foreach

const newList = Array.from(list)        // get array

newList.map((item) => {
    item.style.color = "orange"
})







