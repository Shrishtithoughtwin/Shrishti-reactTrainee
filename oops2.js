// encaplsulation using function
function createCounter()
{
    let count =0;
    return {
        increment: function()
        {
            count++;
        },
        getcount: function()
        {
            return count;
        }
    };
}

const counter= createCounter();
counter.increment();
counter.increment();
console.log(counter.getcount());
counter.increment();
counter.increment();
console.log(counter.getcount());
// console.log(counter.count);   ----can't access directly