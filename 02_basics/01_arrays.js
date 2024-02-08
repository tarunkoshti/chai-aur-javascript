// Creating an array with different data types
let myArray = [1, 'hello', true, { key: 'value' }, [2, 4, 6]];
console.log(myArray)

// Accessing elements by index
console.log(myArray[0]);  // Output: 1
console.log(myArray[1]);  // Output: hello
console.log(myArray[6] = "tarun")
console.log(myArray) // see output
console.log(myArray.length)

// Modifying an element
myArray[2] = false;


// arrays methods

const arr = [0, 1, 2, 3, 4, 5, 6]
arr.push([3, 5567, 65, 5])
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(9)
console.log(arr)
arr.shift()
console.log(arr)

const newArr = arr.join()
console.log(arr)
console.log(newArr)

console.log(arr.includes(0))
console.log(arr.indexOf(3))

const fruits = ['apple', 'banana', 'orange', 'grape'];
const slicedArray = fruits.slice(1, 3);
console.log(slicedArray)
console.log(slicedArray[0] = "scdvd")
console.log(slicedArray)
console.log(fruits)

const deletee = fruits.splice(1,3)
console.log(deletee)
console.log(fruits)



