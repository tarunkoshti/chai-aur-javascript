// const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newValues = values.map((val) => val >= 5)

// console.log(newValues)  dont use map to filter items 
// filter callback function return that element but 
// map callback dunction retrun true or false


const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newValues = values.map((val) => val*2)

// map is chainable 
// let newValues = values
//     .map((val) => val * 2)
//     .map((val) => val + 2)
//     .filter((val) => val > 10)

console.log(newValues)