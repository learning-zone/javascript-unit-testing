describe('Expect Assertion library', () => {
  it('toBe Demo', () => {
    expect(2 + 2).toBe(4);
  });
  it('toEqual demo', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it('truthiness', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  it('toContain demo', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer'
    ];
    expect(shoppingList).toContain('beer');
  });

  it('toMatch Demo', () => {
    expect('Christoph').toMatch(/stop/);
  });
});
