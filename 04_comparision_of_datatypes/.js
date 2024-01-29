console.log("2" >= 1)   // string conerted automaticaly to number
console.log("2" == 1)  // this is equality check operator not get converted to number

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// the reason is that the equality check == and comparisons > < >= <= works differently
// comparisons converts null to number, treating it as 0
// that is why null >= 0 true and null > 0 false

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)