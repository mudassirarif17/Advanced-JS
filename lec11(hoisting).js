// HOISTING MEAN DECLERATION OF A VAR , FUNC OR CLASS IS AT THE TOP OF THE CODE (ONLY DECLARATION NOT INITIALIZTION)

// FUNCTION OR CLASS EXPRESSION ARE NOT TO BE HOISTED 

// This is hoisting it is only applicable to var but bot on let and const
console.log(a);
greet();
function greet(){
    console.log("Good Morning");
}

// IMP : function expression are not to be hoisted 
// var greet = function(){
//     console.log("Good Morning");
// }

var a=9;    //Decleration hoisted to the top but initialization not 
console.log(a);

