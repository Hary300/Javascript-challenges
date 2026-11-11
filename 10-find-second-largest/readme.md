# Challenge 10 - Find Second Largest

**Difficulty:** Easy

## Description

Create a function called `findSecondLargest` that finds and returns the second-largest unique number in an array.

Unique means that duplicate values are counted only once.

If the array does not contain at least two distinct numbers, return `null`.

## Requirements

1. Create a function named `findSecondLargest`.
2. Accept an array of numbers as its parameter.
3. Return the second-largest unique number.
4. Ignore duplicate values when determining the result.
5. Support positive numbers, negative numbers, and zero.
6. Return `null` if there are fewer than two distinct numbers.
7. Do not modify the original array.

## Examples

| Input                | Expected Output |
| -------------------- | --------------: |
| `[10, 5, 8, 20, 15]` |              15 |
| `[1, 2, 3, 4, 5]`    |               4 |
| `[10, 10, 8, 8, 5]`  |               8 |
| `[-5, -2, -10]`      |              -5 |
| `[5, 5, 5]`          |            null |
| `[7]`                |            null |
| `[]`                 |            null |
| `[-1, 0, 1]`         |               0 |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.sort()`.
- Do not use `Set`.
- Do not modify the original array.
- Return a number or `null`.

## Learning Goals

- Practice array iteration.
- Understand comparison operators.
- Practice conditional statements.
- Handle duplicate values.
- Practice tracking multiple values.
- Improve problem-solving skills.

## Completion Criteria

All tests in `test.js` must pass.
