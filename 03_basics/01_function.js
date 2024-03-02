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



