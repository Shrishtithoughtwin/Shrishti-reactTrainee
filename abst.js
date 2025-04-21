class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }

    multiply(a, b) {
      return a * b;
    }

  }
  
  const calc = new Calculator();
  console.log(calc.add(5, 2));     
  console.log(calc.subtract(9, 2));
  console.log(calc.multiply(3, 7));

  