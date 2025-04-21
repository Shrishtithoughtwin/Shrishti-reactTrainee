class A {
    speak() {
      console.log("This is class A");
    }
  }
  
  class B extends A {
    say() {
      console.log("This is class B");
    }
  }
  
  const a1 = new B();
 a1.speak();
 a1.say(); 
  