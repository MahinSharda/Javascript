// Comparison examples with different operators

// Check if 2 is greater than 1
// console.log(2 > 1); // Expected output: true, as 2 is greater than 1

// Check if 2 is greater than or equal to 1
// console.log(2 >= 1); // Expected output: true, because 2 is equal to or greater than 1

// Check if 2 is less than 1
// console.log(2 < 1); // Expected output: false, because 2 is not less than 1

// Check if 2 is equal to 1
// console.log(2 == 1); // Expected output: false, because 2 is not equal to 1

// Check if 2 is not equal to 1
// console.log(2 != 1); // Expected output: true, because 2 is not equal to 1

// Comparing strings with numbers

// Check if the string "2" is greater than the number 1
// console.log("2" > 1); // Expected output: true, JavaScript converts "2" to number and compares

// Check if "02" is greater than number 1
// console.log("02" > 1); // Expected output: true, "02" is treated as 2 after conversion

// Comparison with null and undefined

// Check if null is greater than 0
console.log(null > 0); // Expected output: false, because null is considered as 0 in comparisons

// Check if null is equal to 0
console.log(null == 0); // Expected output: false, null is not equal to 0

// Check if null is greater than or equal to 0
console.log(null >= 0); // Expected output: true, null is considered equal to 0 in JavaScript

// Check if undefined is equal to 0
console.log(undefined == 0); // Expected output: false, undefined is not equal to 0

// Check if undefined is greater than 0
console.log(undefined > 0); // Expected output: false, undefined can't be compared to numbers like 0

// Check if undefined is less than 0
console.log(undefined < 0); // Expected output: false, undefined can't be compared to numbers like 0

// Strict equality check (===)

console.log("2" === 2); // Expected output: false because one is a string and the other is a number
