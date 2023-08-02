let arr1 = [23 , 34 , 45 ];

// Example of map
let a = arr1.map((element , index ,array)=>{
    console.log(element , index , array)
    return element + 1;
})

console.log(a);

// Example of filter
let arr2 = [3 , 45 , 67, 0 ,9 ,6]
let b = arr2.filter((val)=>{
    return val<50
})

console.log(b);

// Example of Reduce 
let arr3 = [1 , 2 , 3 ,0 ,10 , 2];
let c = arr3.reduce((h1 , h2 )=>{
    return h1 + h2;
})
console.log(c);