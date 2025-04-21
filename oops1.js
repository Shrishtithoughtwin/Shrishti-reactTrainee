class Person
{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showdetails()
    {
        console.log(" Hello,I am "+this.name+" and i am "+this.age);
    }
}

const person1 =new Person("Abhi",21);
person1.showdetails();