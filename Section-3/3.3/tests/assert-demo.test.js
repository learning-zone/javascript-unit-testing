const assert = require('assert');
describe('Assert library', () => {
  it('assert() demo', () => {
    assert(100 > 70, 'Expected value is not greater than received value');
  });
  //If two objects, or their child objects, are not equal, an error is thrown and the program is terminated:
  it('deepEqual() demo', () => {
    let x = { a: { n: 0 } };
    let y = { a: { n: 0 } };
    let z = { a: { n: 0 } };
    assert.deepEqual(x, y); //OK
    assert.deepEqual(
      x,
      z
    ); /*AssertionError: { a: { n: 0 } } deepEqual {a: { n: 1 } }*/
  });
  //If two values are not equal, an error is thrown and the program is terminated:
  it('equal() demo', () => {
    assert.equal(50, 50); //OK
    assert.equal(50, '50'); //OK
    assert.equal(50, 50); /*AssertionError: 50 == 70 */
  });
});
