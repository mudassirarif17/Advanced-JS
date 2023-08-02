// let a = setTimeout(() => {
//     alert("I am inside of settime out")
// }, 5000);



// let b = prompt("Do You want to run set timeOut : ")
// if("n" == b){
//     clearTimeout(a);
// }
// console.log(a)

let sum = (a , b ,c)=>{
    console.log("Yes I am runing " + (a+b+c))
}
setTimeout(sum , 23 , 34 , 55 , 3000)