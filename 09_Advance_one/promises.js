const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // Database calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve(); // Resolve the promise
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
});






////// second exaple 

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("complete second async");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async task 2");
});





////// Third Example
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Abdullah", email: "khan@gmail.com" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});






///four exapmple
const promiseFour = new Promise(function (Resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            Resolve({ username: "khan", password: "123" })
        } else {
            reject('ERROR something went wrong')
        }

    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))







//// promise five 
const promiseFive = new Promise(function(Resolve,reject){
    setTimeout(function () {
        let error = false
        if (!error) {
            Resolve({ username: "javascript", password: "Abd123" })
        } else {
            reject('ERROR tantion')
        }

    }, 1000)
});
async function consumedPromisefive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromisefive()






/////////////////////////====================+++++++++++++++++++++++++++++++++====//////////////////////////////<
    
async function getAllusers() {
    try {
        const response = await fetch('https://api.publicapis.org/entries');
        const data = await response.json(); // Await the json() method to parse the response body as JSON
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
getAllusers()






// second example
fetch('https://catfact.ninja/fact')
.then( (response) => {
   return response.json()
} )
.then((data) => {
   console.log(data);
} )
.catch( (error)=> console.log(error))
