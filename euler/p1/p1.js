// Euler Project - Problem 1
// find the sum of all the multiples of 3 or 5 below 1000

let solution1 = 0;
for (i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		solution1 = solution1 + i;
	}
}

console.log(`The solution to Problem 1 is '${solution1}'`);
