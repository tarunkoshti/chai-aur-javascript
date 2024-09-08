// const promise1 = Promise.reject('Error 1');
// const promise2 = Promise.resolve('Success 2');
// const promise3 = Promise.resolve('Success 3');

// Promise.any([promise1, promise2, promise3])
//   .then((result) => console.log(result))  // Output: "Success 2"
//   .catch((error) => console.error(error));


  const promise1 = Promise.reject('Error 1');
  const promise2 = Promise.reject('Error 2');
  const promise3 = Promise.reject('Error 3');
  
  Promise.any([promise1, promise2, promise3])
    .then((result) => {
      console.log(`First resolved promise: ${result}`);
    })
    .catch((error) => {
      console.error('All promises rejected:', error.errors); // AggregateError
    });

    
    // All promises rejected: [ 'Error 1', 'Error 2', 'Error 3' ]

