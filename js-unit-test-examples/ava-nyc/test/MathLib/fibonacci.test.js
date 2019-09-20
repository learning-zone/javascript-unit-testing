import test from 'ava';
import MathLib from '../../src/index';

test('fibonacci', t => {
  const mathLib = new MathLib();
  const result = mathLib.fibonacci(12);
  t.is(result[12], 144);
});
