var employee ={
    name:'Shiv',
    empid:'0911',
    hometown:'pune',
    age:25,
    skills:['c','java','javascript'],
    emp:function(){
        return this.empid+" "+this.name ;
    },
    living:{city:'pune', country:'india'}
}
console.log(employee);
console.log(employee.name);
console.log(employee.emp());
console.log(employee.living.city);