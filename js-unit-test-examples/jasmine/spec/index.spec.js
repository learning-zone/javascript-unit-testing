describe('MathLib', function () {
  var MathLib = require('../src/index.js');

  describe('add', function () {
    it('adds two numbers together', function () {
      var mathLib = new MathLib();
      var result = mathLib.add(1, 2);
      expect(result).toEqual(3);
    });
  });

  describe('multiply', function () {
    it('multiply two numbers', function () {
      var mathLib = new MathLib();
      var result = mathLib.multiply(3, 3);
      expect(result).toEqual(9);
    });
  });

  describe('fibonacci', function () {
    it('generates a valid fibonacci sequence', function () {
      var mathLib = new MathLib();
      var result = mathLib.fibonacci(12);
      expect(result[12]).toEqual(144);
    });
  });
});
