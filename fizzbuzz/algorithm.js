/**
 * Determine the fizziness and buzziness of an integer
 *
 * @param {number} n - the integer to determine FizzBuzz for 
 * @return {string} the FizzBuzz answer as a string
 */
const fizzBuzz = n => {
	if (!Number.isInteger(n)) throw new Error(`Invalid input. Expected integer, received ${n}`);
	return `${n % 3 ? '' : 'Fizz'}${n % 5 ? '' : 'Buzz'}` || `${n}`;
}

module.exports = fizzBuzz;
