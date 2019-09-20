const MathLib = require('../src');

describe('MathLib', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const mathLib = new MathLib();
      const result = mathLib.add(1, 2);
      expect(result).toBe(3);
    });
  });

  describe('multiply', () => {
    it('multiply two numbers', () => {
      const mathLib = new MathLib();
      const result = mathLib.multiply(3, 3);
      expect(result).toBe(9);
    });
  });

  describe('fibonacci', () => {
    it('generates a valid fibonacci sequence', () => {
      const mathLib = new MathLib();
      const result = mathLib.fibonacci(12);
      expect(result[12]).toBe(144);
    });
  });
});
