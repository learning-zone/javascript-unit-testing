const { sum } = require('../math');

describe('Sum Feature', () => {
test('should calculate the sum of two numbers', () => {
	const results = sum(2,2);
	expect(results).toBe(4);
	expect(results).toBeGreaterThan(3)
	expect(results).toBeGreaterThanOrEqual(3)
	expect(results).toBeLessThan(5)
	expect(results).toBeLessThanOrEqual(5);
	expect(results).toEqual(4)
});
test('should calculate the sum of two floating point numbers', () => {
	const results = sum(0.1 , 0.3);
	expect(results).toBeCloseTo(0.4);
})
});
