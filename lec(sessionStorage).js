sessionStorage.getItem("name");
// page reload does not produce  affect on it but whenever we open the same link on new tab it will vanished  
sessionStorage.setItem("name"  , "mudassir");
sessionStorage.clear()
sessionStorage.removeItem("name")

window.onstorage = (e)=>{
    alert(changed);
    console.log(e)
}

// json.parse convert string into obja 
// json.stringify convert obj to str