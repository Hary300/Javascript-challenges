# Challenge 03 - Filter Even Numbers

**Difficulty:** Easy

## Description

Create a function called `filterEvenNumbers` that extracts all even numbers from an array and returns them in a new array.

An even number is a number that is divisible by 2 without a remainder.

## Requirements

1. Create a function named `filterEvenNumbers`.
2. Accept an array of numbers as its parameter.
3. Return a new array containing only even numbers.
4. Preserve the original order of the numbers.
5. If there are no even numbers, return an empty array.
6. Do not modify the original array.

## Examples

| Input                | Expected Output |
| -------------------- | --------------- |
| `[1, 2, 3, 4, 5, 6]` | `[2, 4, 6]`     |
| `[1, 3, 5, 7]`       | `[]`            |
| `[2, 4, 6]`          | `[2, 4, 6]`     |
| `[-2, -3, 0, 5]`     | `[-2, 0]`       |
| `[]`                 | `[]`            |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not modify the original array.
- The returned value must be an array.

## Learning Goals

- Practice array iteration.
- Understand the modulo operator (`%`).
- Practice conditional statements.
- Practice creating and returning a new array.

## Completion Criteria

All tests in `test.js` must pass.
