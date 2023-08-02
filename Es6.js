// console.log("Lets learn Es6");
// Topic # 1
// ES5
// var name = "Mudassir";
// console.log(name);
// name = "Mudassir Arif";
// console.log(name);
// console.log(Sname);
// var Sname = "Arif";


// ES6
// let throughs an error because we use variable before assignment 
// console.log(Sname);
// let Sname = "Arif";
// console.log(Sname);
// let name = "Mudassir";
// console.log(name);
// name = "Mudassir Arif";
// console.log(name);

// const name = "Mudassir";
// console.log(name);
// name = "Mudassir Arif";
// console.log(name);

// Topic # 2 Arrow Function
// ES5
// function greet(name){
//     return "Hello " + name;
// }
// console.log(greet("mudassir"));

// ES6
// if you have only single argument in func so yoy remove paranthesis
// let greet = name =>{
//     return `Hello ${name}`;
// };
// console.log(greet("mudassir"));

// let greet = (name,age) =>{
//     return `Hello ${name} and ${age}`;
// };
// console.log(greet("Arif",8));

// let sqr = (num) => num * num;
// console.log(sqr(5));

// Topic # 3 this keyword in JS
// const person ={
//     test (){
//         console.log(this)
//     },
// };
// person.test();

// const person = {
//     test (){
//         setTimeout( function(){
//         console.log(this);
//         }, 2000);
//     },
// };
// person.test();

// Topic # 4 Template literals in JS / Backticks
// ES5
var name = "Mudassir";
// console.log("hello " + name + " Have a nice day");
var res ="Hello \nthis is next line ";
// console.log(res);

// ES6
let fname = "Arif";
// console.log(`Hello ${fname} Have a nice day`);
let res1 = `Hello
this is 
next 
line
`;
// console.log(res1);

// Topic # 5 Array and Object destructuring
// var person = {
//     name : "Mudassir",
//     age : 18,
//     contcat : "0335",
//     email : "mudassirinoxent@gmail.com",
// };

// ES5
// var name = person.name;
// var age = person.age;
// var contcat = person.contcat;
// var email = person.email;

// ES6
// const person = {
//     name1 : "Mudassir",
//     age : 18,
//     contcat : "0335",
//     email : "mudassirinoxent@gmail.com",
// };

// let {name1:personname1 , age , contcat , email} = person;
// console.log(personname1);
// console.log(age);
// console.log(contcat);
// console.log(email);

// Array destructuring
var arr = ["A" , "B" , "C" , "D"];
// ES5
// var v1 = arr[0];
// console.log(v1);

// ES6
let [v1,v2,v3,v4]=arr;
// console.log(v1);
// console.log(v2);
// console.log(v3);
// console.log(v4);

// Topic # 6 Import Export 


// Topic # 7 promises in JS
// const myPromise = new Promise((resolved , rejected)=>{
//     const a=5 , b=3;
//     const c=a+b;
//     if(c===8){
//         console.log(`yes ${a} + ${b} = 4`);
//     }
//     else{
//         console.log(`NO ${a} + ${b} != 4`);
//     }
// });
// myPromise.then((m)=>{
//     console.log(m);
// }).catch((err)=>{
//     console.log(err);
// });

// Topic # 8 Rest & Spread OPERator
// Spread
const oldArr = [1,2,3,4,5,6];
const newArr = ["a","b","c",...oldArr,7,8,9,10];
// console.log(newArr);

// REST
const sum=(...numbers)=>{
    let total = 0;
    numbers.forEach((n) => {
        total +=n;
    });
    return total;
}
// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(2,6,2));

// Topic # 9 Array Map Method
const course = ["Php","Angular","React","C#"];
const newCourse = course.map((c)=>{
    return `<li>${c}</li>`;
});

// console.log(course);
// console.log(newCourse);

const series =[1,2,3,4,5,6,7,8,9,10];
const num = 5;
const newSeries = series.map((s)=>{
    return s * num;
})
// console.log(newSeries);
// console.log(series);

// Topic 10 OOP in js
class person{
    constructor(uName , uAge){
        this.name=uName;
        this.age=uAge;
    }
    details(){
        console.log(`The age of ${this.name} is ${this.age} Years`);
    }
}
// For creating Obj
const p = new person("Mudassir" , 21);
const q = new person("Mudassir Arif" , 21.6);
p.details();
q.details();