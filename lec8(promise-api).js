let p1 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 11000);
})

let p2 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        // resolve("value 2");
        reject("value 2")
    }, 2000);
})

let p3 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})

// CODE FOR ONE BY ONE EXECUTION
// p1.then((val)=>{
//     console.log(val);
// })

// p2.then((val)=>{
//     console.log(val);
// })

// p3.then((val)=>{
//     console.log(val)
// })

// Promises Api has 6 methods 
//let promises_all = Promise.all([p1, p2 , p3])   //1. it returns an array when all promises are done if any of the promise is rejected it throws an error 
//let promises_all = Promise.allSettled([p1, p2 , p3])   //2. it returns an array with status and value of promise however the promise is rejected
//let promises_all = Promise.race([p1, p2 , p3])   //3. it returns a promise which is completed first like a race  
//let promises_all = Promise.any([p1, p2 , p3])   //4. it returns a promise which is completed first like a race with out rejection 
// let promises_all = Promise.resolve(6)   //5. it returns a promise which is completed first like a race with out rejection 
let promises_all = Promise.reject(new Error("hey"))   //6. it returns a promise which is completed first like a race with out rejection 

promises_all.then((val)=>{
    console.log(val);
})