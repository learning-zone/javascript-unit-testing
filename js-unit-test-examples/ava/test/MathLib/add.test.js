import test from 'ava';
import MathLib from '../../src/index';

test('add', t => {
  const mathLib = new MathLib();
  const result = mathLib.add(1, 2);
  t.is(result, 3);
});
