const name = "tarun"
const age = 21

// console.log(name + age + " value")

console.log(`my name is ${name} and my age is ${age}`)  //string interpulation

// create string with new keyword

const lastname = new String("koshti")
// return string as object where each character will be value and they have key as index
console.log(lastname)
console.log(typeof lastname)
console.log(lastname[0])
console.log(lastname.toUpperCase())
console.log(lastname)

const newString = lastname.substring(0, 4)
console.log(newString)

const newStr = lastname.slice(-5, 4)
console.log(newStr)

const anotherString = "    tarun    "
console.log(anotherString)
console.log(anotherString.trim())
console.log(anotherString.trimEnd())

const url = "https://tarunkoshti.com/tarun%10910koshti"

console.log(url.replace("%10910", "910"))

console.log(url.includes("tarun"))

const anotherStr = "tarun-koshti-910"
console.log(anotherStr.split("-"))
console.log(anotherStr.split("-", 2))

console.log(anotherStr.concat("hello"))
console.log(anotherStr)


