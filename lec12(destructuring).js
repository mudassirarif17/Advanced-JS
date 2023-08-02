// allows you to easily extract values from Objects or Arrays and assign to new values or even assign default values to undefined properties

// Destructuring
// let arr = [1 , 2 , 3 , 4 , 5 , 6];
// let [a , b , ,...rest] = arr;

// console.log(a , b  , rest)

// let {a , b} = {a: 1 , b:2}
// console.log(a , b)


// Spread Operator
// For Converting An array to obj 
let arr1 = [1 , 2 ,3]
let obj1 = {...arr1}

// console.log(obj1)

function sum(v1 , v2 , v3){
    return v1+v2+v3;
}
console.log(sum(...arr1))

let obj = {
    name : "harry",
    company : "ABC company",
    address : "Azeem plaza block n flat 5"
}

// This will change your object name key
console.log({...obj , name : "Sammy"})

// This will not change your name in object 
console.log({ name : "Sammy" , ...obj })
