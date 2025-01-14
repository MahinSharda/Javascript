"use strict"; // Strict mode ensures better error checking and making the code cleaner

// Type Conversion Examples
let score = "mahin"; // Declaring a variable 'score' with a string value

// Converting 'score' to a number using Number() function
let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // Check the type of 'valueInNumber'
// console.log(valueInNumber); // Check the value of  'valueInNumber'

// Possible conversions
// "33" => 33 (valid number string gets converted to number)
// "33abc" => NaN (non-numeric characters result in NaN)
// true => 1; false => 0 (Boolean to number conversion)

let isLoggedIn = "mahin"; // Declaring a variable 'isLoggedIn' with a string value

// Converting 'isLoggedIn' to a boolean value
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true (non-empty strings are truthy values)

// Possible conversions
// 1 => true; 0 => false (Numbers to boolean)
// "" => false (Empty string is falsy)
// "mahin" => true (Non empty string is truthy)

let someNumber = 33; // Declaring a number variable

// Converting 'someNumber' to a string using String() function
let stringNumber = String(someNumber);
// console.log(stringNumber); // "33" (Number converted to string)
// console.log(typeof stringNumber); // "string" (Type of 'stringNumber')

// **** Operations ***********************************

let value = 3;
let negValue = -value; // Unary negation of 'value'
// console.log(negValue); // -3 (sign of the number is flipped)

// Arithmetic operations
// console.log(2 + 2); // Addition: 4
// console.log(2 - 2); // Subtraction: 0
// console.log(2 * 2); // Multiplication: 4
// console.log(2 ** 3); // Exponentiation: 8 (2 raised to the power of 3)
// console.log(2 / 3); // Division: 0.6666...
// console.log(2 % 3); // Modulus: 2 (remainder of 2 divided by 3)

// String concatenation
let str1 = "hello";
let str2 = " mahin";
let str3 = str1 + str2; // Concatenating two strings
// console.log(str3); // "hello mahin" (combines both strings)

// More examples of string and number concatenation
// console.log("1" + 2); // "12" (string + number = string)
// console.log(1 + "2"); // "12" (number + string = string)
// console.log("1" + 2 + 2); // "122" (left-to-right concatenation)
// console.log(1 + 2 + "2"); // "32" (addition first, then concatenation)

// Operator precedence
// console.log((3 + 4) * 5 % 3); // 35 % 3 = 2 (brackets first, multiplication, then modulus)

// Unary plus (+) operator to convert values to numbers
// console.log(+true); // 1 (Boolean true becomes 1)
// console.log(+""); // 0 (Empty string becomes 0)

// Multiple assignments in one line
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All three variables get the value 4

// Increment operator example
let gameCounter = 100;
++gameCounter; // Pre-increment: increments and returns the new value
console.log(gameCounter); // 101 (value increased by 1)

// Reference for more detail
// Link: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
