const { suite, test } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');

suite('app', () => {
  test('print', () => {
    const result = 'Smith';
    assert.equal(result, 'Smith');
  });
});
