// Promises is nothing but it is similar to real life promise 
let promise = new Promise(function(resolve , reject){
    console.log("Promise is Pending");
    resolve(56 , "Promise is resolved ");
})

console.log("HelloOne");

setTimeout(() => {
    console.log("Hello 2 in 2 second ")
}, 2000);

console.log(promise)

// Fetch google.com homePage ===> console.log(google.com home page done)
// Fetch data from the api
// Fetch picture from the server 
// Print downloading