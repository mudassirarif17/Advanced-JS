// ASYNC INDICATES THAT IT WILL RETURN A PROMISE 
// async function maddy(){
//     return 5
// }

// maddy().then((val)=>{
//     console.log(val);
// })

async function weatherNews(){
let karachiWeather = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("27 deg")
    }, 5000);
})

let lahoreWeather = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("17 deg")
    }, 7000);
})

    // .then Syntax 
    // karachiWeather.then((val)=>{
    //     console.log(val);
    // })
    // lahoreWeather.then((val)=>{
    //     console.log(val);
    // })

    // Async await
    console.log("geting karachi weather update...")
    let karachiW = await karachiWeather;
    console.log("karachi temparature is " , karachiW);
    
    console.log("geting Lahore weather update...")
    let lahoreW = await lahoreWeather;
    console.log("Lahore temparature is " , lahoreW);
}

// USING ASYNC AWAIT SYNTAX WE CAN STOP THE EXECUTION OF CHARRY
let chary= async ()=>{
    console.log("I am charry & I am not waiting");
}

async function News(){
    console.log("Welcome to weather Control room");
    await weatherNews();
    await chary();
}

News();