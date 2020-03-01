// Euler Project - Problem 3
// what is the largest prime factor of the number 600851475143 ?

console.log(`The solution to Problem 3 is '${factor()}'`);

function factor() {
	let num = prompt('Enter a number to find the largest prime factor: ');
	let primes = [];
	let divisor = 2;
	for (i = 0; i < num / divisor; i++) {
		if (i !== 0 && num % i === 0) {
			primes.push(i);
			primes.forEach((prime) => {
				if (prime >= 2 && primes.slice(-1) != prime && primes.slice(-1) % prime === 0) {
					primes.pop();
					divisor = primes.slice(-1);
				}
			});
		}
	}
	return primes.slice(-1);
}
// if you want to see all the prime factors
// you could return 'primes' from the function;
