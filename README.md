# JavaScript - Key Concepts

## About This Repository

This repository contains JavaScript code to understand core concepts, including variables, basic operations, and data types. It focuses on best practices like using `let` and `const`, working with different data types, and performing basic arithmetic operations.

## Topics Covered

- Variables and their types
- Strict mode and basic operations
- Data types and type checking

## Concepts

### 1. **`let` and `const`**

- **`let`:** Block-scoped variable declaration, preferred over `var`.
- **`const`:** Declares a constant variable whose value cannot be changed.
- **Avoid `var`:** It has function-scoped behavior, which can lead to bugs.

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
  - Addition: `2 + 2` → `4`
  - Subtraction: `2 - 2` → `0`
  - Multiplication: `2 * 2` → `4`
  - Division: `2 / 3` → `0.666...`
  - Exponentiation: `2 ** 3` → `8`
  - Modulus: `2 % 3` → `2`

### 10. **String Operations**

- **Concatenation:** Combine strings using the `+` operator. Example: `"hello" + " mahin"` results in `"hello mahin"`.
- **String + Number:** Concatenation of strings and numbers results in strings. Example: `"1" + 2` results in `"12"`.

### 11. **Operator Precedence**

- **Order of Operations:** Operators are evaluated in a specific order. For example, `(3 + 4) * 5 % 3` → `2` (brackets first, then multiplication, then modulus).

### 12. **Multiple Assignments**

- **Multiple Variables:** You can assign the same value to multiple variables in one line. Example: `num1 = num2 = num3 = 2 + 2` results in `num1 = num2 = num3 = 4`.

### 13. **Increment/Decrement Operations**

- **Pre-Increment:** `++gameCounter` increments the value first and then returns it.
  Example: `gameCounter = 100; ++gameCounter;` → `101`
