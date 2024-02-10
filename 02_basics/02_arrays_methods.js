let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'grape'];

// Concatenate two arrays
let combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits)


let fruits = ['banana', 'apple', 'orange', 'grape'];
let num = ['banana', 'apple', 2, 32, 'orange', 'grape', 34, 0, -1, 453,]
// Sort the array in ascending order
fruits.sort();
num.sort(function (a, b) {
    return a - b;
})
let numbers = [10, 5, 8, 2];

// Sort the array in ascending numerical order
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers)
console.log(num) // accending order for decending return b-a
console.log(fruits)

let fruit = ['apple', 'banana', 'orange'];

// Using delete to remove 'banana' (not recommended)
delete fruit[1];
console.log(fruit)
// Result: fruits is now ['apple', <1 empty item>, 'orange']