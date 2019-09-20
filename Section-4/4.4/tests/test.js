const test = require('tape');

test('A passing test', assert => {
  assert.pass('This test will pass.');
  assert.end();
});
test('Assertions with tape.', assert => {
  const expected = 'something to test';
  const actual = 'something to test';

  assert.equal(
    actual,
    expected,
    'Given two mismatched values, .equal() should produce a nice bug report'
  );

  assert.end();
});
test('My first test', function(assert) {
  assert.equal(1, 1, 'Numbers 1 and 2 are the same');
  assert.end();
});
