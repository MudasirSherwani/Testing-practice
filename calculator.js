class Calculator {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  add(a, b) {
    return (a + b);
  }

  subtract(a, b) {
    return (a - b);
  }

  multiply(a, b) {
    return (a * b );
  }

  divide(a, b) {
    return (a / b);
  }
}

module.exports = Calculator;