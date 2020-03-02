// Project Euler - Problem 4
// Find the largest palindrome made from the product of two 3-digit numbers.

let numStringFwd = '';
let splitString = [];
let reverseStringArray = [];
let numStringRev = '';
let palindromes = [];
let palindromeCount = 0;
for (i = 100; i < 1000; i++) {
	for (j = 100; j < 1000; j++) {
		numStringFwd = String(i * j);
		splitString = numStringFwd.split('');
		reverseStringArray = splitString.reverse();
		numStringRev = reverseStringArray.join('');
		if (numStringFwd == numStringRev) {
			palindromes.push(Number(numStringRev));
			palindromeCount++;
		}
	}
}

palindromes.sort(sortPalindromes);
console.log(`There are ${palindromeCount} palindromes when multiplying all 3 digit numbers by each other`);
console.log(`The solution for Problem 4 is '${palindromes.slice(-1)}'`);

function sortPalindromes(a, b) {
	return a - b;
}
