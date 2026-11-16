# Challenge 20 - Find Range

**Difficulty:** Easy

## Description

Create a function called `findRange` that finds the difference between the largest and smallest numbers in an array.

The range is calculated by subtracting the smallest number from the largest number.

If the array is empty, return `null`.

## Requirements

1. Create a function named `findRange`.
2. Accept an array of numbers as its parameter.
3. Find the largest number in the array.
4. Find the smallest number in the array.
5. Calculate the range by subtracting the smallest number from the largest number.
6. Support positive numbers, negative numbers, and zero.
7. Return `null` if the array is empty.
8. Do not modify the original array.

## Examples

| Input                | Expected Output |
| -------------------- | --------------: |
| `[1, 2, 3, 4, 5]`    |             `4` |
| `[10, 5, 8, 20, 15]` |            `15` |
| `[-5, -2, -10]`      |             `8` |
| `[-10, 0, 10]`       |            `20` |
| `[5, 5, 5, 5]`       |             `0` |
| `[100]`              |             `0` |
| `[0, -5, 5]`         |            `10` |
| `[]`                 |          `null` |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.sort()`.
- Do not use `Math.max()`.
- Do not use `Math.min()`.
- Do not modify the original array.
- Return a number or `null`.

## Learning Goals

- Practice array iteration.
- Understand comparison operators.
- Practice tracking maximum and minimum values simultaneously.
- Understand variable initialization.
- Practice arithmetic operations.
- Handle empty arrays and edge cases.

## Completion Criteria

All tests in `index.test.js` must pass.
