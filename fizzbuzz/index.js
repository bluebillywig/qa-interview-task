const readline = require('readline');
const fizzBuzz = require('./algorithm');

const rl = readline.createInterface({
	input: process.stdin
});

rl.on('line', number => {
	const n = parseInt(number);
	n && console.log(fizzBuzz(n));
});
