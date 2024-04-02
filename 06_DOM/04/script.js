const languages = document.querySelector(".languages")
const btn = document.querySelector(".btn")
const input = document.querySelector("input")
// console.log(input.value)
input.style.color = "red"


addLanguage("java")
addLanguage("python")

function addLanguage(language) {
    const listItem = document.createElement("li")
    const text = document.createTextNode(language)
    listItem.appendChild(text)
    languages.appendChild(listItem)
    // console.log(language)
}

btn.addEventListener("click", function () {
    addLanguage(input.value)
})


// Edit 

const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Go lang" // optmization issue 
const newli = document.createElement("li")
newli.textContent = "Go Lang"
secondLang.replaceWith(newli)

// Edit

const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = "<li>ruby</li>"

// remove

const lastLang = document.querySelector("li:last-child")
lastLang.remove()