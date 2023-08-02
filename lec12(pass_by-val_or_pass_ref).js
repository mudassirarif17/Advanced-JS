// PASS BY VALUE IS APPLICABLE TO PRIMPITIVE DATA TYPE BUT PASS BY REFRENCE IS APPLICABLE ON NON-PRIMPTIVE DATA TYPE

// Example of pass by value 
let a = 5;
let b = a;

b = a + 5;
console.log(a);
console.log(b);

// Example of pass by refrence 
let obj1 = {
    name : "Mudassir",
    password : "mudassir123"
}

let obj2 = obj1;
obj2.password = "maddy123";
console.log(obj1);
console.log(obj2);

// Similar for array
let arr1 = [1,2,3];
let arr2 = arr1;

arr2.push(4);
console.log(arr1);
console.log(arr2);