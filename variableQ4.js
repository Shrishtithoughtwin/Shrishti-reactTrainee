//closures
function outter()
{
    let str= "this is outerside variable accessing the inner function";
    function inner()
    {
        console.log(str)
    }
    inner();
}
outter();