# Challenge 13 - Separate Positive and Negative Numbers

**Difficulty:** Easy

## Description

Create a function called `separateNumbers` that separates positive and negative numbers from an array into two different arrays.

The function should return an object containing two properties:

- `positive`: An array containing positive numbers.
- `negative`: An array containing negative numbers.

Zero should be ignored.

Maintain the original order of numbers in each resulting array.

## Requirements

1. Create a function named `separateNumbers`.
2. Accept an array of numbers as its parameter.
3. Return an object with `positive` and `negative` properties.
4. Store numbers greater than zero in the `positive` array.
5. Store numbers less than zero in the `negative` array.
6. Ignore zero.
7. Maintain the original order of numbers.
8. Return empty arrays when no matching numbers exist.
9. Do not modify the original array.

## Examples

| Input                 | Expected Output                               |
| --------------------- | --------------------------------------------- |
| `[1, -2, 3, -4, 5]`   | `{ positive: [1, 3, 5], negative: [-2, -4] }` |
| `[-1, -2, -3]`        | `{ positive: [], negative: [-1, -2, -3] }`    |
| `[1, 2, 3]`           | `{ positive: [1, 2, 3], negative: [] }`       |
| `[0, 0, 0]`           | `{ positive: [], negative: [] }`              |
| `[-5, 0, 5, -10, 10]` | `{ positive: [5, 10], negative: [-5, -10] }`  |
| `[0]`                 | `{ positive: [], negative: [] }`              |
| `[]`                  | `{ positive: [], negative: [] }`              |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.filter()`.
- Do not use `.sort()`.
- Do not modify the original array.
- Return an object containing two arrays.

## Learning Goals

- Practice array iteration.
- Practice creating and updating arrays.
- Understand comparison operators.
- Practice conditional statements (`if` / `else if`).
- Understand object properties.
- Practice returning multiple results using an object.

## Completion Criteria

All tests in `index.test.js` must pass.
