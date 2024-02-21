// two way to declare objects

// constructor - singletion
// Object.create()
// jab bhi aap consturctor se object baanate hai to singleton object banata hai


// object literals

// symbol ko as a object key use karna 
const mySym = Symbol("key1")

const JsUser = {
    name: "Tarun", // object me keys by default String ki tarah treat hoti hai name -"name"
    "full name": "Tarun Koshti", // there is ony one way to access it - square notation 
    age: 20,
    location: "bhopal",
    email: "tarunkoshti910@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"],
    mySym: "my key 1", //  it is not the write way to make the symbol as a key
    [mySym]: "I am a Symbol" // it make the object property private 
}

console.log(JsUser.name)
// console.log(JsUser[name])
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser)
console.log(JsUser[mySym])
console.log(Object.keys(JsUser)) // becase of Symbol last property will be private


JsUser.email = "tarunkoshti910@google.com"
console.log(JsUser.email)
// Object.freeze(JsUser)  // after this you can't propogate(make changes) the oject

JsUser.greeting = function () {
    console.log("Hello Js User")
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


