// stack (Premitive)               
// heap (non-premitive or reference type)

let name = "tarun"

let surname = "koshti"
surname = "kosti"

console.log(name)
console.log(surname)

let objA = {
    name: "tarun",
    age: 21
}

console.log(objA)

let objB = objA

objB.name = "koshti"

console.log(objA)
console.log(objB)


