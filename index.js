// 1. Ways To print in javaScript
// alert("Hello wprld");

// 2. JS console API
// console.log("Hello world", 2 + 4, "This is me");
// console.warn("This is warning");
// console.error("This is error");
// This is assertion for checking some think is equal or not
// console.assert(2==4);


// 3. Method for targeting the value of html tag by using id of the tag
// firstContainer.innerHTML = "Hello Mudassir";
// firstContainer.innerHTML = "<b>Hello Mudassir you are bold now </b>";
// For getting the element from DOM by using id
// document.getElementById('click');
// For getting the element from DOM by using tagName
// document.getElementsByTagName('h1')[0].style.backgroundColor = "red";
// document.getElementsByTagName('h1')[0].style.color = "white";
// For writing in the documant 
// document.write("hey I am learning JS");

// 4. Multiline Comments
/*
This 
is 
multiline Comment
*/

// 5. JavaScript Variables 
// What are Variables ? -> containers to store data values 
var a =56;
var b =34;
// console.log(a+b);

// 6. DataTypes in JS
// At a very high level there are two types of data types in JS.
// 1. Primitive dataTypes --> Undefined , null , number , string , boolean , Symbol
// 2. Refrenced dataTypes --> Arrays and Objects  
// 1. primitive dataTypes
// String
var str1 = "This is a string ";
var str2 = "This is a  new string ";
// console.log(str1,str2);

// Number
var num1 = 456;
var num2 =56.7;
// console.log(num1+num2);

// Undefined 
var und = undefined;
var und1;
// console.log(und1);

// Null
var n = null;
// console.log(n);

var t = true;
var f = false;
// console.log(t,f);

// 2. Refrenced dataTypes 
// Objects
var marks = {
    mudassir : 20,
    haris : 10,
    usama : 15,
}
// console.log(marks);
// console.log(marks.usama);

// 7. Arrays
var arr= [1,2,"maddy",4,5];
// console.log(arr);
// console.log(arr[2]);

// 8. Opeartors in Js 
// 8.1 Arithmetic operators
var a = 45;
var b = 5;
// console.log("The sum of a & b",a+b);
// console.log("The diff of a & b",a-b);
// console.log("The mul of a & b",a*b);
// console.log("The div of a & b",a/b);

// 8.2 Assignment operator
var c = b;
// c += 2;  //c = c + 2;
// c -= 2;
// c *= 2;
c /= 2;
// console.log(c);

// 8.3 Comparisons operators
var x=34;
var y=23;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

// Logical Operators
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);
// console.log(false && true);

// console.log(true || true);
// console.log(false || false);
// console.log(true || false);
// console.log(false || true);

// console.log(!false);
// console.log(!true);

// 9 Functions in JS
// Do not repeat Your self
function avg(a,b){
    return (a+b)/2;
}
// console.log(avg(3,3))

// 10 Conditionals in JS
// Single if statement 
var age = 18;
// if(age>=18){
//     console.log("You can drive");
// }
// if else statement 
age = 3;
// if(age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You can't drive");
// }
// if-else ladder
age = 28;
// if(age<=18){
//     console.log("You can drive");
// }
// else if(age<=28){
//     console.log("You can drive only at night");
// }
// else if(age>38){
//     console.log("You can drive only at morning");
// }
// else{
//     console.log("You can't drive");
// }

// 11 loops in JS
var arr1 =[1,2,3,4,5,6,7];
// for(var i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }

// Continue/Break statement
// for(var i=0; i<arr1.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr1[i]);
// }

// forEach Loop
// arr1.forEach(function(element){
//     console.log(element);
// })

var j=0;
// while(j<arr1.length){
//     console.log(arr1[j]);
//     j++;
// }

var j=7;
// do{
//     console.log(arr1[j]);
//     j++;
// }while(j<arr1.length);

// 12. Array methods
// here we introduce let it is a new variable decleration its scope is in the block
let arr2 = ["camera" , "funny" , 23 , null , true];
// console.log(arr2.length);
// console.log(arr2.pop());
// it will return an index 
// console.log(arr2.push("mudassir"));
// console.log(arr2);

// shift first element ko remove krta hai
arr2.shift();
// console.log(arr2);

// ye first element ki jga pr element rk deta hai 
arr2.unshift("harry");
// console.log(arr2);

let d = [22,45,78,"mudassir",12,"ali"];
// ye element ko sort krta hai alphabatical order me 
// console.log(d.sort());

// 13. String methods in JS
let myLovelyString = "Mudassir is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(0,8));
let str = myLovelyString.replace("Mudassir","arif");
// console.log(str);

// 14. Date methods in JS
let myDate = new Date();
// console.log(myDate.getTime());  //ye seconds me time return krta hai 
// console.log(myDate.getFullYear());  //ye Year return krta hai 
// console.log(myDate.getDay());  //ye day return krta hai or sunday (0 se start krta hai index)
// console.log(myDate.getMinutes());  //ye min return krta hai hours k
// console.log(myDate.getHours());  //ye hours krta hai 24 format me


// 15. Dom Mainpulation (Document object Model)
let elem = document.getElementById('click');
// console.log(elem);

let elemByClass = document.getElementsByClassName('container');
// console.log(elemByClass);
// elemByClass[0].style.background="yellow";
// by this way we can add a class to any tag
elemByClass[0].classList.add('bg-primary');
// elemByClass[1].classList.add('bg-primary');

// it give the inner HTML of the tag
// console.log(elem.innerHTML)
// it give the inner text of the tag
// console.log(elem.innerText)

// console.log(elemByClass[0].innerHTML)
// console.log(elemByClass[0].innerText)

let tn = document.getElementsByTagName('div');
// console.log(tn);

// for adding an element/child  in parent
createdElement = document.createElement('p');
createdElement.innerText = "This is created Para";
tn[0].appendChild(createdElement);

// for replacing an element/child  in parent
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is created bold Para";
tn[0].replaceChild(createdElement2 , createdElement);

// it will remove the child 
// tn[0].removeChild(createdElement2);

// 16. Selecting Using Query
let sel =document.querySelector('.container');
// console.log(sel);
let sel1 =document.querySelectorAll('.container');
// console.log(sel1);

// Clicked function in JS
function clicked(){
    // console.log("The button was clicked");
    document.getElementById('heading').style.background="yellow";
    // document.getElementById('heading').style.visibility="hidden";
}

window.onload = function(){
    // console.log("The document was load");
}

// 17. Events in JS
firstContainer.addEventListener('click' , function(){
    // console.log("clicked on container");
    // it works same as the class work i.e .container
    // document.querySelectorAll('.container')[0].innerHTML='<b>We have clicked</b>';
})

firstContainer.addEventListener('mouseover' , function(){
    // console.log("Mouse on container");
})

firstContainer.addEventListener('mouseout' , function(){
    // console.log("Mouse out ofs container");
})

// let prevhtml = document.querySelectorAll('.container')[0].innerHTML;
// firstContainer.addEventListener('mouseup' , function(){
//     console.log("Mouse on container");
//     document.querySelectorAll('.container')[0].innerHTML=prevhtml;
// })

// firstContainer.addEventListener('mousedown' , function(){
//     // console.log("Mouse out of container");
//     document.querySelectorAll('.container')[0].innerHTML='<b>Mouse out</b>';
// })

// 18. Arrow Function
let sum=(a,b)=>{
    return a+b;
}
// console.log(sum(2,4));

let logKaro=()=>{
    console.log("I am your log");
}

// 19 . setInterval/clearInterval and setTimeout/clearTimeout
// let clr = setTimeout(logKaro,2000);
// clearTimeout(clr);
// let clr1 = setInterval(logKaro,3000);
// clearInterval(clr1);

// 20. javaScript local storage for storing some thing in user local storage
// localStorage.setItem('name','mudassir');
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// 21. JSON
let obj = {name : "maddy" , age : 21 , class : "bcs" , a : { "this" : "that"}};
console.log("Object : ",obj);
jso = JSON.stringify(obj);  //it convert the obj into String/string
console.log("Json : ",jso);
let jsnToObj = JSON.parse(jso);
console.log("Object : ",jsnToObj);  //It convert json to obj

// 22. Backticks
let marks1 = 34;
console.log(`my age is ${marks1}`);
