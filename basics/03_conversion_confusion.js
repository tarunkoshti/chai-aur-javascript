let age = "21"
let score = "21a"

console.log(typeof age)
console.log(typeof (age))

let ageInNumber = Number(age)
console.log(typeof ageInNumber)

let scoreInNumber = Number(score)
console.log(typeof (scoreInNumber)) // Number
console.log(scoreInNumber)    // NaN

let a = null
let aInNumber = Number(a)
console.log(typeof aInNumber)  // Number
console.log(aInNumber)  // 0

let b = undefined
let bInNumber = Number(b)
console.log(typeof bInNumber)  // Number
console.log(bInNumber)  // NaN

let c = true
let cInNumber = Number(c)
console.log(typeof cInNumber)  // Number
console.log(cInNumber)  // 1         for c = false o/p 0 
//  for c = "tarun" o/p NaN

// if we try to convert these to Number we will get type Number but value will no be a number
// "33" => 33
// "tarun" => NaN
// "33tarun" => NaN
// undefined => NaN                                    
// true => 1
// false => 0
// null => 0 

let isLoggedIn = null

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)    // false 

// 1 => true , 0 => false
// "" => false , "tarun" => true

// falsy value 0, false, null, undefined, NaN => false
// expect these => true


/******************* operations ********************/

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(1 + "2")
console.log("1" + 2)
console.log(1 + -'2')
console.log(1 + +'2')
console.log(-"1" + 2)
console.log(+"1" + 2)
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(+true) // 1
console.log(-true) // -1
console.log(-false) // -0

console.log(isNaN(100))