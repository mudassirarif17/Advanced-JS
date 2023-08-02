// LEXICAL SCOPE MEAN RANGE OF A THING AND THIS MEAN WHEN WE DECLARE AN OBJECT WE USED THIS TO IDENTIFY SOME OF ITS PROPERTY
console.log("Lexical scope for this");

// Simple example 
// let data = {
//     list : "friend",
//     name : ["Mudassi" , "Usama" , "Haris"],
//     getfriend : function(){
//         console.log(this.list , this.name);
//     }
// }

// Using map func with simple func 
let data = {
    list : "friend",
    name : ["Mudassir" , "Usama" , "Haris"],
    getfriend : function(){
        that = this;
        this.name.map(function(element){
            console.log(that.list , element)
        })
    }
}

// Using map func with arrow func 
// ARROW FUNC HAS NO THEIR ON THIS THIS IT USES THEIR PARENT THIS 
// let data = {
//     list : "friend",
//     name : ["Mudassir" , "Usama" , "Haris"],
//     getfriend : function(){
//         this.name.map((element)=>{
//             console.log(this.list , element)
//         })
//     }
// }

data.getfriend()