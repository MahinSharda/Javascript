# JavaScript - Variables

## About This repository

This repository contains JavaScript code for understanding different topics from an educator's playlist. The focus here is on variables in JavaScript, explaining how variables are declared and used in JavaScript with examples.

## Topics Covered

- Variables and their types
- Declaring variables using `var`, `let`, and `const`
- Scope and hoisting

## Concepts Used

### 1. **`let`**

- **Definition:** `let` is used to declare a block-scoped variable. Unlike `var`, it provides a better way to declare variables that are limited to a block, statement, or expression.
- **Usage:**
  ```javascript
  let accountEmail = "example@example.com";
  ```
- **Why `let` is preferred:**
  `let` avoids issues related to variable redeclaration, which is common with `var`. It also helps avoid accidental global variables.

### 2. **`const`**

- **Definition:** `const` is used to declare variables whose values should not change. Once a value is assigned to a variable using `const`, it cannot be reassigned.
- **Usage:**
  ```javascript
  const accountId = 12345;
  ```
- **Important Note:** `const` does not make objects or arrays immutable; it only makes the reference to the variable constant.

### 3. **`var` (Avoid Using)**

- **Definition:** `var` is the traditional way to declare variables in JavaScript, but it has function-scoped behavior. It's better to use `let` or `const` in modern JavaScript because `var` can lead to bugs due to its hoisting behavior.
- **Usage (not recommended):**
  ```javascript
  var accountCity = "Mumbai";
  ```
- **Why to Avoid `var`:**
  - It’s function-scoped, meaning the variable is accessible throughout the function, not just inside the block.
  - Hoisting issues that can lead to unexpected bugs.

## Example Code

```javascript
let accountEmail = "example@example.com"; // Using 'let' for block scope
const accountId = 12345; // Using 'const' for constants
var accountCity = "Mumbai"; // Avoid using 'var'

console.log(accountEmail);
console.log(accountId);
console.log(accountCity);
```
