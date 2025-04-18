let s= "hello";
let reverseS=s.split('').reverse().join('');
console.log(reverseS);

let num= [1, 2, 3, 4, 5];
let sum = num.reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(sum); 

