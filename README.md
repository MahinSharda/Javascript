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
