"use strict" // treat all js code as newer version

// alert(3 + 3) // we are using node, not browser


// number => 2
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

const id = Symbol('123')
const newId = Symbol('123')
console.log(id === newId)

const bigNum = 345764785433256789756n

console.log(typeof undefined) // undefined
console.log(typeof null)  // object