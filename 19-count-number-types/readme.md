# Challenge 19 - Count Number Types

**Difficulty:** Easy

## Description

Create a function called `countNumberTypes` that counts the number of positive numbers, negative numbers, and zeros in an array.

The function should return an object containing three properties:

- `positive`: The total number of positive numbers.
- `negative`: The total number of negative numbers.
- `zero`: The total number of zeros.

If the array is empty, all counts should be `0`.

## Requirements

1. Create a function named `countNumberTypes`.
2. Accept an array of numbers as its parameter.
3. Count all positive numbers (greater than zero).
4. Count all negative numbers (less than zero).
5. Count all zeros.
6. Return an object containing `positive`, `negative`, and `zero`.
7. Return all counts as `0` if the array is empty.
8. Do not modify the original array.

## Examples

| Input                  | Expected Output                         |
| ---------------------- | --------------------------------------- |
| `[1, -2, 0, 3, -4, 0]` | `{ positive: 2, negative: 2, zero: 2 }` |
| `[1, 2, 3, 4]`         | `{ positive: 4, negative: 0, zero: 0 }` |
| `[-1, -2, -3]`         | `{ positive: 0, negative: 3, zero: 0 }` |
| `[0, 0, 0]`            | `{ positive: 0, negative: 0, zero: 3 }` |
| `[-5, 0, 5]`           | `{ positive: 1, negative: 1, zero: 1 }` |
| `[7]`                  | `{ positive: 1, negative: 0, zero: 0 }` |
| `[]`                   | `{ positive: 0, negative: 0, zero: 0 }` |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.filter()`.
- Do not use `.reduce()`.
- Do not modify the original array.
- Use conditional statements to classify each number.
- Return an object containing three numeric properties.

## Learning Goals

- Practice array iteration.
- Understand comparison operators (`>`, `<`, and `===`).
- Practice using multiple counter variables.
- Understand conditional statements (`if`, `else if`, and `else`).
- Practice returning multiple values using an object.
- Handle empty arrays and edge cases.

## Completion Criteria

All tests in `index.test.js` must pass.
