# Challenge 06 - Find Index

**Difficulty:** Easy

## Description

Create a function called `findIndex` that searches for a specific number
in an array and returns its index.

If the number does not exist in the array, return -1.

## Requirements

1. Create a function named `findIndex`.
2. Accept an array of numbers as the first parameter.
3. Accept a target number as the second parameter.
4. Return the index of the target number.
5. If the target appears multiple times, return its first index.
6. Return -1 if the target is not found.
7. Do not modify the original array.

## Examples

| Input                    | Expected Output |
| ------------------------ | --------------: |
| `([10, 20, 30, 40], 30)` |               2 |
| `([5, 10, 15], 5)`       |               0 |
| `([5, 10, 15], 15)`      |               2 |
| `([1, 2, 3], 9)`         |              -1 |
| `([4, 4, 4], 4)`         |               0 |
| `([], 10)`               |              -1 |

## Constraints

- The first parameter will always be an array of numbers.
- The second parameter will always be a number.
- Do not use external libraries.
- Do not use `.indexOf()`.
- Do not use `.findIndex()`.
- Do not modify the original array.
- Return a number.

## Learning Goals

- Practice array iteration.
- Understand array indexing.
- Practice conditional statements.
- Understand early return.
- Practice searching for elements in an array.

## Completion Criteria

All tests in `test.js` must pass.
