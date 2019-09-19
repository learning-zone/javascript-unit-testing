const {greet} = require('../util');

describe('Greet Feature', () => {
  it('should get the greet message', () => {
    const results = greet('Jane');
    expect(results).toBe('Hello Jane');
    expect(results).toMatch('Jane');
    expect(results).toMatch(/Jane/);    
  })
})
