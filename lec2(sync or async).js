// This is an example of Sync programming in which each line is executed one by one 

// let a = prompt("What is your Name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your fav Color?");

// console.log(a + "is" + b + "years old and his fav color is" + c );


// This is an example of async programming in which code is not blocked mean code is scedule and on the time it will executed
console.log("Start")
function greet(name){
    setTimeout(() => {
        console.log("hello" + name);
    }, 3000);
}
console.log("End")
greet("mudassir");
