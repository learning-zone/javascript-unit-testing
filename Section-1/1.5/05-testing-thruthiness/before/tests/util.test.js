const { greet, isEven, isOdd } = require('../util');

describe('Greet Feature', () => {
	it('should get the greet message', () => {
		const results = greet('Jane');
		expect(results).toBe('Hello Jane');
		expect(results).toMatch('Jane');
		expect(results).toMatch(/Jane/);
	});
});

describe('Even', () => {
	it('should return true if number is even', () => {
		const results = isEven(2);
		expect(results).toBeTruthy();
		expect(results).not.toBeFalsy();
	});
	it('should return false if number is not even', () => {
		const results = isEven(3);
		expect(results).not.toBeTruthy();
		expect(results).toBeFalsy();
	});
});
describe('Odd', () => {
	it('should return true if number is odd', () => {
		const results = isOdd(3);
		expect(results).toBeTruthy();
		expect(results).not.toBeFalsy();
	});
	it('should return false if number is not odd', () => {
		const results = isOdd(4);
		expect(results).not.toBeTruthy();
		expect(results).toBeFalsy();
	});
});
