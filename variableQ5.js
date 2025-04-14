// shadowing
let x=15;
function shadowing()
{
    let x=5;
    console.log(x);
}
shadowing();
console.log(x);