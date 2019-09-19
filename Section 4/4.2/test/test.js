const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const { add } = require('../math');
describe('Mocha demo', () => {
  it('assert demo', () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.isArray(numbers, 'is array of numbers');
    assert.include(numbers, 1, 'array contains 2');
    assert.lengthOf(numbers, 5, 'array contains 5 numbers');
  });
  it('expect style', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers)
      .to.be.an('array')
      .that.includes(2);
    expect(numbers).to.have.lengthOf(5);
  });
  it('should style', () => {
    const numbers = [1, 2, 3, 4, 5];
    numbers.should.be.an('array').that.includes(2);
    numbers.should.have.lengthOf(5);
  });
});
describe('#add()', () => {
  it('2 + 2 is 4', async () => {
    const p = await add(2, 2);
    expect(p).to.equal(4);
  });
});
