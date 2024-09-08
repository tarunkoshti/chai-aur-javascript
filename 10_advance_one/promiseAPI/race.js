const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'First promise resolved'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Second promise resolved'));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // "First promise resolved"
  })
  .catch((error) => {
    console.error(error);
  });


const slowPromise = new Promise((resolve) => setTimeout(resolve, 3000, 'Slow promise resolved'));
const fastPromise = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Fast promise rejected'));

Promise.race([slowPromise, fastPromise])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // "Fast promise rejected"
  });
