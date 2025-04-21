// encapsulation using class
class Person {
    #age;
    constructor(name,age){
      this.name=name;
      this.#age=age;
    }
    getage()
    {
        return this.#age;
    }
     setage(newage)
     {
        if(newage>0)
        {
         this.#age=newage;
        }
     }
} 
const p1=new Person("Shine",27);
console.log(p1.name);
console.log(p1.getage());
p1.setage(34);
console.log(p1.getage());
// console.log(p1.#age);  //can't access directly