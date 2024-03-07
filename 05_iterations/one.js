// for of loop


const array = [1, 2, 3, 4, 5]

for (const iterator of array) {
    console.log(iterator)
}

const string = "Hello Greeting"

for (const iterator of string) {
    console.log(iterator)
}

// Maps

// const map = new Map(
//     [
//         ["apples", 500],
//         ["bananas", 300],
//         ["oranges", 200]
//     ]
// )

// console.log(map)

// map.set("apple",500)

// console.log(map)

// var myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set('key1', 'new value');

// console.log(myMap)


const map = new Map();
map.set("apples", 500)
map.set("bananas", 300)
map.set("oranges", 200)

// for (const iterator of map) {
//     console.log(iterator)
// }

for (const [key, value] of map) {
    console.log(key + ":" + value)
}