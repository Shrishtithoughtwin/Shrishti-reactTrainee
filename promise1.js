let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0)
        { 
            resolve( "even");
        }    
    else 
    {
        reject("odd");
    }    
});
checkEven.then((message) => {
        console.log(message)
    }) .catch((error) => {
        console.error(error)
    }); 
