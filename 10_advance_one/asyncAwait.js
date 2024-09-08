// // Without async/await
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// // With async/await
// async function fetchData() {
// try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error('Error:', error);
// }
// }

// fetchData();



// // If you want to run multiple asynchronous operations in parallel (rather than sequentially as in the previous example), you can use Promise.all() with await:

// async function getData() {
//     try {
//       const [response1, response2] = await Promise.all([
//         fetch('https://jsonplaceholder.typicode.com/posts/1'),
//         fetch('https://jsonplaceholder.typicode.com/posts/2')
//       ]);
      
//       const data1 = await response1.json();
//       const data2 = await response2.json();
      
//       console.log(data1);
//       console.log(data2);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   getData();

  
//   If an error occurs in an async function, it rejects the promise. You can catch this rejection using a try...catch block:

// async function example() {
//     try {
//       const result = await Promise.reject('Oops, something went wrong!');
//       console.log(result);
//     } catch (error) {
//       console.error('Caught error:', error);
//     }
//   }
  
//   example();
  


  // async function fetchProducts() {
  //   try {
  //     // after this line, our function will wait for the `fetch()` call to be settled
  //     // the `fetch()` call will either return a Response or throw an error
  //     const response = await fetch(
  //       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  //     );
  //     if (!response.ok) {
  //       throw new Error(`HTTP error: ${response.status}`);
  //     }
  //     // after this line, our function will wait for the `response.json()` call to be settled
  //     // the `response.json()` call will either return the parsed JSON object or throw an error
  //     const data = await response.json();
  //     console.log(data[0].name);
  //   } catch (error) {
  //     console.error(`Could not get products: ${error}`);
  //   }
  // }
  
  // fetchProducts();


  async function fetchProducts() {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  
  const promise = fetchProducts();
  promise
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });
  
  
