// Q4 : FLATTEN THE ARRAY

let arr = [
    [1 , 2],
    [3 , 4],
    [5 , 6 , [7 , 8] , 9],
    [10 , 11 , 12]
];

//[1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ,12]

// let falttened = [].concat(...arr);
// console.log(falttened)

console.log(arr.flat(2));

const customFlat=()=>{
    
}

// js builtin flat func 

// console.log(customFlat)