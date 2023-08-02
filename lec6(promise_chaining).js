// PROMISE CHAINING IS THE SOLUTION OF CALLBACK HALL AND PYRAMID OF DOM 
let p1 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("Resolved after 3 second");
        resolve(56);
    }, 3000);
})

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Promise 2");
        },3000)
    })
    return p2
}).then((value)=>{
    console.log("We are done");
    console.log(value);
    return 2
}).then((value)=>{
    console.log("Now we are pakka wla done");
    console.log(value);
})

