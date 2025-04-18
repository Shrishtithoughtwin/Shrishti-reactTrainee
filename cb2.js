function getdata(id,nextData)
{
    setTimeout(() => {
        console.log("data",id);
        if(nextData)
{
   nextData();
}   
 }, 2000);
}
//callback hell OR pyramid of doom
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4,()=>{

            });
        });
    });
});