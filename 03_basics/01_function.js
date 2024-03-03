// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// function print(){
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     console.log(4)
//     console.log(5)
// }

// print()

// function addTwoNumbers(n1, n2) {                       // function statement or defination
//     if (typeof n1 === "number" && typeof n2 === "number") {
//         console.log(n1 + n2)
//     }
//     else (console.log("only accept numbers"))
// }

function addTwoNumbers(n1, n2) {                       // function statement or defination
    return n1 + n2
    console.log("tarun")  // unreachable code: not get execution beacause there is rule of function defination that nothing will be execute after the return statement
}


let result = addTwoNumbers(3, 2)   // if there is no return value by the function then
console.log(result)                // we get undefined


function loginUser(username) {
    // if(username === undefined){
    //     console.log("please enter username")
    //     return
    // }
    if (!username) {
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUser("tarun"))
console.log(loginUser()) // undefined



// higher order function

const firstOrderFunc = () => {
    console.log("Hello, I am a First order function")
    return 10;
}
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
console.log(higherOrder(firstOrderFunc))

// first class function

// const handler = () => console.log("This is a click handler function");
// document.addEventListener("click", handler);                run in browser console

// constructor function
function abcd() {
    this.name = "tarun"
    age = 21
}

const n = new abcd();
console.log(n.name)
console.log(n.age) // undefined
console.log(this)
// arrow function
const arrowFunc1 = (a, b) => a + b; // Multiple parameters
const arrowFunc2 = a => a * 10; // Single parameter
const arrowFunc3 = () => { } // no parameters

// detect function is called as constructor
function Myfunc() {
    if (new.target) {
        console.log(new.target)
        console.log("called with new");
    } else {
        console.log("not called with new");
    }
}

new Myfunc()
Myfunc()

// multiple parameter
function calCartPrice(val1, val2, ...num) {
    return num
}

console.log(calCartPrice(200, 300, 400, 500, 600))

// handle object and array in function

const obj = {
    name: "tarun",
    age: 21
}
handleObject(obj)
function handleObject(obj) {
    console.log(`username is ${obj.name} age is ${obj.age}`)
}

const arr = [1, 345, "yssgab"]
console.log(handleArray(arr))
function handleArray(arr) {
    return arr[1]
}