import test from 'ava';
import MathLib from '../../src/index';

test('multiply', t => {
  const mathLib = new MathLib();
  const result = mathLib.multiply(3, 3);
  t.is(result, 9);
});
