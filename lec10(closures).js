// Closure ek function hota hai along withs its lexical environment closure me ek function k 7 ap ko us ka lexical environment bind ho kr mlta hai
// Closure ko apne outer function k bhi var ka access hota hai
// Closure ko use krte waqt var k value nh jti blke us ka refrence jta hai 

// Simple function

// function init(){
//     var name = "mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     name = "Mudassir";
//     return displayName;
// }

// let c = init();
// c();

// nested function
const x =()=>{
    let a=1;
    console.log(a)
    const y=()=>{
        // a=2;
        console.log(a)
        const z=()=>{
            // a=3;
            console.log(a)
        }
        z();
    }
    // a=999;
    y();
}
x();


// function returnfunc(){
// const x =()=>{
//     let a=1;
//     console.log(a)
//     const y=()=>{
//         // a=2;
//         console.log(a)
//         const z=()=>{
//             // a=3;
//             console.log(a)
//         }
//         z();
//     }
//     a=999;
//     y();
// }
// return x
// }

// let a = returnfunc()
// a()