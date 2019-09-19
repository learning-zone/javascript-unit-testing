function greet(name) {
	return `Hello ${name}`;
}
function isEven(n) {
	return n % 2 == 0;
}
function isOdd(n) {
	return Math.abs(n % 2) == 1;
}
function getCustomer(id) {
	return { id, name: 'Jane' };
}
const persons = ['Jane', 'Doe', 'Sane', 'Mathew'];
function getPersons() {
	return persons;
}

function downloadCV(path) {
	if (!path) {
		throw new Error('invalid URL');
	}
	return 'Content';
}
module.exports = {
	greet,
	isEven,
	isOdd,
	getCustomer,
	getPersons,
	downloadCV
};
