# JavaScript - Key Concepts

## About This repository

This repository contains JavaScript code to understand core concepts, including variables, basic operations, and data types. It focuses on best practices like using `let` and `const`, working with different data types, and performing basic arithmetic operations

## Topics Covered

- Variables and their type
- Strict mode and basic operations
- Data types and type checking

## Concepts

### 1. **`let` and `const`**

- **`let`:** Block-scoped variable declaration, preferred over `var`.
- **`const`:** Declares a constant variable whose value cannot be changed
- **Avoid `var`:** It has function-scoped behavior, which can lead to bugs

### 2. **Strict Mode**

- **Definition:** `"use strict"` enforces stricter parsing and error handling in JavaScript, helping catch common mistakes.

### 3. **Basic Operations**

- **Addition Example:** `3 + 3` outputs `6` to the console.
- **String Output:** `"Mahin"` is printed directly.

### 4. **Declaring Variables**

- **Examples:**
  - `let name = "Mahin"` (string)
  - `let age = 18` (number)
  - `let isLoggedIn = false` (boolean)
  - `let state` (undefined)

### 5. **Data Types in JavaScript**

- **Number:** Numeric values like `2` or `3.14`.
- **BigInt:** For large integers.
- **String:** Text values like `"Mahin"`.
- **Boolean:** Logical values (`true`/`false`).
- **Null:** Represents an empty or non-existent value.
- **Undefined:** Declared variable with no value.
- **Symbol:** Unique identifier used as object keys.

### 6. **Type Checking**

- **`typeof` Operator:** Used to check variable types. For example, `typeof undefined` returns `"undefined"`, and `typeof null` returns `"object"` (a known quirk).

# JavaScript - Key Concepts

## Type Conversion and Operations

### 7. **Type Conversion**

- **Number Conversion:** Use `Number()` to convert values to numbers. Example: `Number("33abc")` results in `NaN`.
- **Boolean Conversion:** Use `Boolean()` to convert values to Boolean. Example: `Boolean("mahin")` results in `true` (non-empty strings are truthy).
- **String Conversion:** Use `String()` to convert numbers to strings. Example: `String(33)` results in `"33"`.

### 8. **Unary Operations**

- **Unary Negation:** The `-` operator flips the sign of a number. Example: `let negValue = -value;` converts `3` to `-3`.
- **Unary Plus:** The `+` operator converts a value to a number. Example: `+true` results in `1`.

### 9. **Arithmetic Operations**

- **Basic Operations:** You can perform arithmetic with numbers. Examples:
  - Addition: `2 + 2` = `4`
  - Subtraction: `2 - 2` = `0`
  - Multiplication: `2 * 2` = `4`
  - Division: `2 / 3` = `0.666...`
  - Exponentiation: `2 ** 3` = `8`
  - Modulus: `2 % 3` = `2`

### 10. **String Operations**

- **Concatenation:** Combine strings using the `+` operator. Example: `"hello" + " mahin"` results in `"hello mahin"`.
- **String + Number:** Concatenation of strings and numbers results in strings. Example: `"1" + 2` results in `"12"`

### 11. **Operator Precedence**

- **Order of Operations:** Operators are evaluated in a specific order. For example, `(3 + 4) * 5 % 3` → `2` (brackets first, then multiplication, then modulus).

### 12. **Multiple Assignments**

- **Multiple Variables:** You can assign the same value to multiple variables in one line. Example: `num1 = num2 = num3 = 2 + 2` results in `num1 = num2 = num3 = 4`

### 13. **Increment/Decrement Operations**

- **Pre-Increment:** `++gameCounter` increments the value first and then returns it.
  Example: `gameCounter = 100; ++gameCounter;` → `101`

## 14. _Comparison Operators_

Comparison operators are used to compare values and return a boolean (true/false) result. Here’s a quick breakdown of common operators:

- **> (Greater than)**: Returns true if the left operand is greater than the right.
- **< (Less than)**: Returns true if the left operand is less than the right.
- **>= (Greater than or equal to)**: Returns true if the left operand is greater than or equal to the right.
- **<= (Less than or equal to)**: Returns true if the left operand is less than or equal to the right.
- **== (Loose equality)**: Compares two values for equality after type conversion.
- **!= (Not equal)**: Returns true if two values are not equal after type conversion.
- **=== (Strict equality)**: Compares two values for equality without type conversion

### Examples

```javascript
console.log(2 > 1); // true, because 2 is greater than 1
console.log(2 >= 1); // true, because 2 is greater than or equal to 1
console.log(2 < 1); // false, because 2 is not less than 1
console.log(2 == "2"); // true, because '2' (string) is converted to 2 (number) before comparison
console.log(2 === "2"); // false, because strict equality (===) does not convert types
```

## 15. _Type Coercion in Comparison_

Type coercion happens when JavaScript automatically converts data types to make comparisons possible.

### Concepts:

- **String to Number Conversion**: Strings are converted to numbers for numeric comparisons.
- **null and undefined**: They behave differently with comparison operators.
  - `null > 0` is false (null is treated as 0 in comparisons).
  - `null == 0` is false (because null is only loosely equal to undefined, not numbers).
  - `null >= 0` is true (this is due to internal abstract comparisons in JS).
  - `undefined` is not equal to any number, even 0.

### Examples

```javascript
console.log("2" > 1); // true, "2" is converted to number 2
console.log("02" > 1); // true, "02" is converted to number 2

console.log(null > 0); // false, null is not greater than 0
console.log(null == 0); // false, null is only loosely equal to undefined
console.log(null >= 0); // true, null is treated as 0 for >= and <= comparisons

console.log(undefined == 0); // false, undefined is not equal to 0
console.log(undefined > 0); // false, undefined cannot be compared to numbers
console.log(undefined < 0); // false, undefined cannot be compared to numbers
```

## 16. Strict Equality (===) vs Loose Equality (==)

### Key Differences:

- **== (Loose Equality)**: Converts the data type of one operand to match the other before comparison.
- **=== (Strict Equality)**: Does not convert data types; both value and type must match.

### Examples

```javascript
console.log(2 == "2"); // true, because '2' (string) is converted to 2 (number) before comparison
console.log(2 === "2"); // false, because === checks both type and value
```

### Notes

- Prefer **===** over **==** to avoid unexpected results caused by type coercion.
- Using **===** makes your code more predictable and less error-prone
