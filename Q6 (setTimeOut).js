// Q6 SetTimeOut Output 

function a (){
    for(var i=0; i<3; i++){
        setTimeout(() => {
           console.log(i) ;
        }, i * 1000);
    }
}
function a (){
    for(let i=0; i<3; i++){
        setTimeout(() => {
           console.log(i) ;
        }, i * 1000);
    }
}

a();