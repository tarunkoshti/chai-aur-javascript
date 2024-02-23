// const tinder = new Object() // singleton 
""
const tinder = {}

tinder.id = "123abc"
tinder.name = "Tarun"
tinder.isLoggedIn = false

// console.log(tinder)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tarun",
            lastname: "Koshti"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

// optional chaining    - in case yadi property exists nahi karti hai to undefined dega 
// jab api call karte hai or kuch karn se respose na aaye ya bo property exists hi na kare to hum iska use karte hai barna hame if else ka use karna padega 
console.log(regularUser?.fullname?.userfullname?.firstname)

// combine objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 2: "c", 4: "d" }

const obj3 = { obj1, obj2 }
const obj4 = { ...obj1, ...obj2 }
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)


console.log(tinder)
const k1 = Object.keys(tinder)
const v1 = Object.values(tinder)
console.log(k1)
console.log(v1)

//  to check that property is exists in that object or not return true
console.log(tinder.hasOwnProperty('isLoggedIn')) 

const mySymbol = Symbol('myKey')

const myObject = {
    name: "Tarun",
    age: 20,
    [mySymbol]: "This is Symbol key value"
}

myObject['myKey'] = "This is String key value"      // does not overwrite the properties value
console.log(myObject['myKey'])      		// This is String key value
console.log(myObject[mySymbol])    			// This is Symbol key value

console.log(Object.keys(myObject))                  // private property is not enumarable 