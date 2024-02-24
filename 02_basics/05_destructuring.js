// Arrays destructuring:

var [one, two, three] = ["JAN", "FEB", "MARCH"];

console.log(one); // "JAN"
console.log(two); // "FEB"
console.log(three); // "MARCH"

var x, y, z;

[x = 2, y = 4, z = 6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6


// Objects destructuring:

var { name: nam, age } = { name: "John", age: 32 };

console.log(nam); // John  rename property
console.log(age); // 32


var { x = 2, y = 4, z = 6 } = { x: 10 };

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6


// JSON API

// json object 
// {
//     "name": "Tarun",
//     "age": 20
//     "salary": 100000
// }

//json array
[
    {},
    {},
    {}
]