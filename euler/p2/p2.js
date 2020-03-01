// Euler Project - Problem 2
// find the sum of even-valued terms in a Fibonacci
// sequence whose values do not exceed four million

let fib = [ 1 ];
let i = 0;

// the 'for' loop stops when the highest value in the array is <= 4000000
for (i = 0; fib[i] < 4000000; i++) {
	if (fib.length < 2) {
		fib.push(fib[0] + fib[0]);
	} else {
		let i = fib.length;
		let a = i - 1;
		let b = i - 2;
		fib.push(fib[a] + fib[b]);
	}
}

// remove the last index if it's > 4000000
if (fib[fib.length - 1] > 4000000) {
	fib.pop();
}

// find the sum of all the even values
let solution2 = 0;
for (j = 0; j < fib.length; j++) {
	if (fib[j] % 2 === 0) {
		solution2 = solution2 + fib[j];
	}
}

console.log(`The solution to Problem 2 is '${solution2}'`);
