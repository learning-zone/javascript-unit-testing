function greet(name) {
	return `Hello ${name}`;
}
function isEven(n) {
	return n % 2 == 0;
}
function isOdd(n) {
	return Math.abs(n % 2) == 1;
}
module.exports = {
	greet,
	isEven,
	isOdd
};
