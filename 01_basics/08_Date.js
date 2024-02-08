const date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(typeof date) // object
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// const myDate = new Date(2023,0,23)
const myDate = new Date(2023, 0, 23, 5, 7)

console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

const myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myDate.getTime())

const newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getHours())

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))

// let newdate = new Date();
// document.write(date);

var d1 = new Date("2022-01-01");
var d2 = new Date("2022-01-04");
console.log(d1.getTime() === d2.getTime()); //True
console.log(d1 === d2); // False
