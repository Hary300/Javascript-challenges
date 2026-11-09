# Challenge 02 - Find Maximum Number

**Difficulty:** Easy

## Description

Create a function called `findMax` that finds and returns the largest number in an array.

## Requirements

1. Create a function named `findMax`.
2. Accept an array of numbers as its parameter.
3. Return the largest number in the array.
4. The function must work with positive and negative numbers.
5. If the array is empty, return `null`.

## Examples

| Input             | Expected Output |
| ----------------- | --------------: |
| `[1, 5, 3, 9, 2]` |               9 |
| `[10, 20, 30]`    |              30 |
| `[-5, -2, -10]`   |              -2 |
| `[7]`             |               7 |
| `[-1, 0, 1]`      |               1 |
| `[]`              |            null |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not modify the original array.
- Return `null` for an empty array.

## Learning Goals

- Practice array iteration.
- Practice comparing numbers.
- Understand how to track a value while looping.
- Practice handling edge cases.

## Completion Criteria

All tests in `test.js` must pass.
