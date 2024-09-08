// const promise1 = Promise.resolve('Success 1');
// const promise2 = Promise.reject('Failure 2');
// const promise3 = Promise.resolve('Success 3');

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     results.forEach((result, index) => {
//       if (result.status === 'fulfilled') {
//         console.log(`Promise ${index + 1} resolved with: ${result.value}`);
//       } else {
//         console.error(`Promise ${index + 1} rejected with: ${result.reason}`);
//       }
//     });
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

Promise.allSettled([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.log(err))