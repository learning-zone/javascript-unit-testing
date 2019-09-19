const { greet, isEven, isOdd, getCustomer, getPersons } = require('../util');

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
describe('Customer', () => {
	it('should find customer by id', () => {
		const results = getCustomer(1);
		expect(results).toBeDefined();
		expect(results).not.toBeUndefined();

		expect(results).toEqual({ id: 1, name: 'Jane' });
		expect(results).toHaveProperty('id', 1);

		expect(results).toEqual(expect.objectContaining({ id: 1 }));
	});
});
describe('Persons', () => {
	it('should fetch all the persons', () => {
		const results = getPersons();
		expect(results).toHaveLength(4);
		expect(results).toContain('Doe');

		expect(results).toEqual(expect.arrayContaining(['Jane', 'Doe']));
	});
});
