let p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve(1);
    },2000)
})

p1.then((val)=>{
    console.log(val);
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(4)
        }, 2000);
    })
}).then((val)=>console.log(val))

p1.then((val)=>{
    console.log("hurrah")
})