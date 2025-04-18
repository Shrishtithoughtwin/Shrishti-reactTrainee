console.log("start");
let count=0;
const interval=setInterval(()=>{
    console.log("Rewrite every second");
    count++;
if(count===5){
    clearInterval(interval);
}

},1000);

console.log("end");