// let d;
// console.log(d)
// a=10
// console.log(a)
// b = 10
// console.log(b)
// console.log(c)


// variable deaclared with var keyword are hoisted and initialized with undefined so accessing them before declaration result in undefined
// variable declared with let and const are hoisted but not initialized immidiately so accessing them before declaration result in ReferenceError.



var a
let b
const c = 10;
console.log(x)
{
    x = 100
    console.log(x)
    var x;
    console.log(x)
}