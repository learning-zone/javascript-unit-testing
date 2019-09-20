import test from 'ava';
const fs = require('fs');

//Running tests serially
test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

const getValue = () => {
  return new Promise(resolve => {
    return resolve(true);
  });
};
test('promises the truth', async t => {
  const value = await getValue();
  t.true(value);
});

test.cb('data.txt can be read', t => {
  // `t.end` automatically checks for error as first argument
  fs.readFile('data.txt', t.end);
});
test.failing('demonstrate some bug', t => {
  t.fail(); // Test will count as passed
});
