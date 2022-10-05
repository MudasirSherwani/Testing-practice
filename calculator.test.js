const Calculator = require('./calculator.js');

describe('Add', () => {
  it('should return the sum of two number', () => {
    const calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(3,4)).toBe(7);
  });
});

describe('Subtract', () => {
  it('should return the subtract of two number', () => {
    const calc = new Calculator();
    expect(calc.subtract(2, 1)).toBe(1);
    expect(calc.subtract(3, 2)).toBe(1);
    expect(calc.subtract(7,4)).toBe(3);
  });
});

describe('Multiply', () => {
  it('should return the multiply of two number', () => {
    const calc = new Calculator();
    expect(calc.multiply(1, 2)).toBe(2);
    expect(calc.multiply(2, 3)).toBe(6);
    expect(calc.multiply(3,4)).toBe(12);
  });
});

describe('Divide', () => {
  it('should return the divide of two number', () => {
    const calc = new Calculator();
    expect(calc.divide(4, 2)).toBe(2);
    expect(calc.divide(18, 2)).toBe(9);
    expect(calc.divide(32, 4)).toBe(8);
  });
});