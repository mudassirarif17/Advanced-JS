// QUESTION 1 : MAP VS FOREACH 
const arr = [1,2,3,4,5];

// map function has an ability to change this array while creating the copy of this array map modify the copy of this but for each noly modify this by changing the orignal array
const mapResult = arr.map((ar)=>{
    return ar + 2;
})

let forEcahResult = arr.forEach((ar , i)=>{
    arr[i] =  ar + 3;
})

console.log(mapResult , forEcahResult);

// Map does not change the orignal array
// console.log(mapResult , arr);