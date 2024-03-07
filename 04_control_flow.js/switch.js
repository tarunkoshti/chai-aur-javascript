// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let month = 3

switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    case 4:
        console.log("apr")
        break;

    default:
        console.log("no match found")
}

const weather = (function getWeather(temp) {
    switch (true) {
        case temp < 0:
            return "freezing";
        case temp < 10:
            return "cold";
        case temp < 24:
            return "cool";
        default:
            return "unknown";
    }
})(10);

console.log(weather)


// What is nullish coalescing operator(??) : null undefined

let val;

// val = 5 ?? 10;  
// val = null ?? 10
// val = undefined ?? 10
// val = null ?? undefined ?? 5 ?? 10    first value which is not null or undefined

// val = null || 10   :  if left-hande-side is falsy value 


console.log(val)

// tarnary operator

// condition ? true : false      // falsy value


console.log(0 ? true : false) // false
console.log(1 ? true : false) // true 

const arr1 = [1, 2, 3]
const arr2 = [3, 5, 6]
const arr3 = [...arr1, ...arr2] 
console.log(arr3)
