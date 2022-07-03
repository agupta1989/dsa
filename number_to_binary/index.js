
// Recursive approach

function convertToBinary(number, base) {
	if (number === 0 || number === 1) {
		return [number];
	}
	const remainder = Math.floor(number / base);
	const quot = number % base;
	const result = convertToBinary(remainder, base);
	result.push(quot);
	return result;
}

const sdf = convertToBinary(85, 2);

console.log(sdf);