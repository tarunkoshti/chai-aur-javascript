// const user = {
//     name: "tarun",
//     age: 21,

//     welcomeMessage: () => {
//         console.log(`${this.name}, welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.name = "anuj"
// user.welcomeMessage()

// console.log(this) // node {}
// // in browser this point to winow object


// function chai(){
//     var user = "tarun"
//     // user = "dvbj"
//     console.log(this.user)
// }

// const chai = function () {
//     var user = "tarun"
//     // user = "dvbj"
//     console.log(this.user)
// }

// chai()

// const chai  = () => {
//     let user = "tarun"
//     console.log(this)
// }

// chai()

// const addTwoNum = (num1, num2) =>{
//     return {username:"tarun"}
// }

// const addTwoNum = (num1, num2) => ({ username: "tarun" })

// arrow function with implicit return
// const addTwoNum = (num1, num2) => num1+num2
// const addTwoNum = (num1, num2) => (num1+num2)

// console.log(addTwoNum(1,2))

// const obj = {
//     method: () => {
//         console.log(this); // 'this' refers to the enclosing scope (e.g., the global object)
//         setTimeout(() => {
//             console.log(this)
//         })
//     }
// };

// yadi function ke ander function hai or this use karna hai to arrow function ka use
// kar sakte hai kyuki yadi classical function use karnge to scope global ho jayega
// per arrow function lexical this use karta hai
// const obj = {
//     method: function() {
//         console.log(this); // 'this' refers to the enclosing scope here method
//         setTimeout(() => {
//             console.log(this)
//         })
//     }
// };

// obj.method();



//IIFE

let abcd = 10;

(function abcd() {
    console.log("DB connected")
})(); // ; semicolon needed to stop the execution 

((name) => {
    console.log(`DB connected ${name}`)
})("tarun");

// console.log(a)