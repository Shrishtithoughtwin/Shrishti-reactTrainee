
//IIFE 

var user = "outside";

(function() {
  var user = "inside";
  console.log(user); 
})();

console.log(user); 

