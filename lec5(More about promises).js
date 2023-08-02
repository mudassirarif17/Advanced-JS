let p1 = new Promise(function(resolve , reject){
    console.log("Promise is Pending");
    setTimeout(() => {
        console.log("I am a promised and I am fulfiled");
        resolve(true);
    }, 5000);
})

let p2 = new Promise(function(resolve , reject){
    console.log("Promise is Pending");
    setTimeout(() => {
        console.log("I am a promised and I am rejected");
        // reject(new Error("I am an Ereor"))
        reject(false);
    }, 5000);
})

// console.log(p1);
// console.log(p2);

p1.then((val)=>{
    console.log(val);
})

// To catch the error
// p2.catch((err)=>{
//     console.log(err)
// })

// Another syntax for then & catching 
p2.then((val)=>{
    console.log(val);
},(err)=>{
    console.log(err)
})