// Callback is nothing it is a function inside the function which is executed after the function is executed 
// we pass a function to a function as an argument similar to variable
function loadScript(src , callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded script with src " + src )
        callback(src)
    }
    script.onerror = function(){
        console.log("Error loading script with src " + src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(src){
    alert('hello world' + src);
}

function goodmorning(src){
    alert('good morning' + src);
}

// loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js` , goodmorning)

// when callback is used all the control is tranfer to developer so it is harmful to use callback 

// Pyramid of Dom callback hell is mean one or more callback 

// A JavaScript callback is a function which is to be executed after another function has finished execution

// Example of callback hell (nested callback)
loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js` , function goodmorning(src){
    alert('good morning' + src);
})
