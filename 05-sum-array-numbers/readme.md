# Challenge 05 - Sum Array Numbers

**Difficulty:** Easy

## Description

Create a function called `sumArray` that calculates the total sum of all numbers in an array.

The function must return the total as a number.

## Requirements

1. Create a function named `sumArray`.
2. Accept an array of numbers as its parameter.
3. Calculate the sum of all elements.
4. Support positive and negative numbers.
5. Return `0` if the array is empty.
6. Do not modify the original array.

## Examples

| Input             | Expected Output |
| ----------------- | --------------: |
| `[1, 2, 3, 4, 5]` |              15 |
| `[10, 20, 30]`    |              60 |
| `[-1, -2, -3]`    |              -6 |
| `[10, -5, 3]`     |               8 |
| `[7]`             |               7 |
| `[]`              |               0 |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.reduce()`.
- Do not modify the original array.
- Return a number.

## Learning Goals

- Practice array iteration.
- Understand accumulator variables.
- Practice arithmetic operations.
- Understand how to maintain a running total.

## Completion Criteria

All tests in `test.js` must pass.
