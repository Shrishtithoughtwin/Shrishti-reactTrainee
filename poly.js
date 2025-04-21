function showMessage(input){
    if(typeof input=== "string"){
        console.log("Text: "+input);
    }
    else if(typeof input=== "number"){
        console.log("Number: "+input);
    }
    else if(Array.isArray(input)){
        console.log("Array with : " +input.length+ " items");
    }
    else{
        console.log("Unknown type");
    }
  
}
showMessage("Hello");
showMessage(123);
showMessage([1,2,3]);