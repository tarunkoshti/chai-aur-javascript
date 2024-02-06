const score = 400
console.log(score)

const balance = new Number(100)
// return number and type will be number
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

// const otherNumber = 124.548965493
const otherNumber = 24.548965493
console.log(otherNumber.toPrecision(3))        //return string

const hundreds = 10000000
console.log(hundreds.toLocaleString())

// ----------- Maths-----------

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(5.2))  // 6
// console.log(Math.floor(5.2)) // 5
// console.log(Math.min(4,6,2,8))
// console.log(Math.max(4,5,3,8))

console.log(Math.random())   // return value between 0 to 1
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// generate number between 10 and 20
