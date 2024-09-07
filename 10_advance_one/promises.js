const promiseOne = new Promise(function(resolve, reject){

    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task 1!")
    }, 1000)
})

promiseOne.then(function(){
    console.log("Async task 1 resolved!")
})

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 2!")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved!")
})

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 3!")
        resolve({name: "Tarun", age: 21})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})

// promise chain

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 4!")
        let error= true
        if(!error){
            resolve({userName: "Tarun", password: 123})
        } else {
            // reject("ERROR: somthing went wrong!")
            reject(new Error("Something went wrong!"))
        }
    }, 1000)
})

promiseFour.then( res => {
    console.log(res)
    return res.userName
}).then((username) => {
    console.log(username)
}).catch((err) => console.log(err))
.finally(() => console.log("Promise is either resolved or rejected"))

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`); // handle error other promise chain assume everything is fine and execute second then and so on even there is an error
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

// attaching multiple handlers

const AMPromise = new Promise( (resolve, reject) => {
    setTimeout(function(){
        response(1)
    }, 1000)
})

AMPromise.then(() => {
    console.log("I am resolved")
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(4)
        }, 2000)
    })
}).then((res) => console.log(res))
AMPromise.then(() => console.log("hurray"))

// async/await 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 5!")
        let error= true
        if(!error){
            resolve({userName: "javascript", password: 123})
        } else {
            reject("ERROR: somthing went wrong!")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

consumePromiseFive()

async function getUsers() {
   try {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    
   } catch (error) {
    console.log(error)
   }
}

// getUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then( res => res.json())
.then( data => console.log(data))
.catch(err => console.log(err))