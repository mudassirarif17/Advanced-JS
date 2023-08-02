let loadScript =(src)=>{
    return new Promise((resolve , reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve(1)
        }
        script.onerror = ()=>{
            reject(0);
        }
    })
}


// Example of promise chaining
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
p1.then((val)=>{
    console.log(val)
    return loadScript = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
}).then((val)=>{
    console.log("Second Script is ready")
}).catch((err)=>{
    console.log(err);
    console.log("we have some problem to load this script");
})