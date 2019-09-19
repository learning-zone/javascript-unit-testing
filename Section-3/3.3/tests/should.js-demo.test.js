//docs https://github.com/tj/should.js/
const { sum } = require('../math');
const should = require('should');
describe('Should.js', () => {
  it('should return 4 when the input number are 1 and 3', function() {
    sum(1, 3).should.be.exactly(4);
    sum(1, 3).should.be.exactly(4).and.be.a.Number;
  });
  it('startWith demo', () => {
    'foobar'.should.startWith('foo');
    'foobar'.should.not.startWith('bar');
  });
  it('above and greaterThan demo', () => {
    const user = { age: 20 };
    user.age.should.be.above(5);
    user.age.should.not.be.above(100);
  });
  it('type demo', () => {
    const user = {};
    user.should.be.type('object');
    'test'.should.be.type('string');
  });
});
