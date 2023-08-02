// Cookies are send to the server when ever we want to reload the page cookies are seperated by ; (semi colon) 
// for entering special character we use encodeURIComponent or decodeURIComponent
// We have various cookies option like path = /a , expire = tue , 29 march 2041 03:15:22 GMT

// window.console.log(window);
// console.log(document.body)
document.body.style.background = "yellow";

console.log(document.cookie);
document.cookie = "name=maddy"
document.cookie = "name2=charry"
document.cookie = "name3=barry"

let key = prompt("Enter your key");
let value = prompt("Enter Your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);