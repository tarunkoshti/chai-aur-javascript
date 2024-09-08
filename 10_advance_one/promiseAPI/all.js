// const promise1 = fetch('https://api.example.com/data1');
// const promise2 = fetch('https://api.example.com/data2');
// const promise3 = fetch('https://api.example.com/data3');

// Promise.all([promise1, promise2, promise3])
//   .then((responses) => {
//     // All promises have resolved
//     return Promise.all(responses.map(response => response.json()));
//   })
//   .then((data) => {
//     // Now you have the data from all three APIs
//     console.log('Data from API 1:', data[0]);
//     console.log('Data from API 2:', data[1]);
//     console.log('Data from API 3:', data[2]);
//   })
//   .catch((error) => {
//     // If any of the promises reject, this will be executed
//     console.error('One or more promises failed:', error);
//   });


const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("p1")
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        reject(new Error("something wnt wrong!"))
        // resolve("p2")
    }, 3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("p3")
    }, 2000)
})

Promise.all([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.log(err))