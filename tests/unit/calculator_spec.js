var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add 1+4 and get 5', function () {
    calculator.previousTotal = 5;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 9);
  });

  it('should subtract 7-4 and get 3', function () {
    calculator.previousTotal = 10;
    calculator.subtract(6);
    assert.strictEqual(calculator.runningTotal, 4);
  });

  it('should multiply 3x5 and get 15', function () {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 15)
  });

  it('should divide 21/7 and get 3', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  });

  it('should concatenate multiple number button clicks', function () {
    calculator.numberClick(3);
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 35)
  });

  it('should chain multiple operations together', function () {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(2)
    calculator.operatorClick('*');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 40);
  });

  it('should clear the running total without affecting the calculation', function () {
     calculator.numberClick(5);
     calculator.operatorClick('+');
     calculator.clearClick();
     calculator.numberClick(3);
     calculator.operatorClick('/');
     calculator.numberClick(2)
     calculator.operatorClick('*');
     calculator.numberClick(1);
     calculator.numberClick(0);
     calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 40)
  });

});
