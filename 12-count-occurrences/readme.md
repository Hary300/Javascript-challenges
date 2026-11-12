# Challenge 12 - Count Occurrences

**Difficulty:** Easy

## Description

Create a function called `countOccurrences` that counts how many times a specific value appears in an array.

The function accepts an array and a target value, then returns the total number of times the target appears.

If the target value does not exist in the array, return `0`.

## Requirements

1. Create a function named `countOccurrences`.
2. Accept an array and a target value as parameters.
3. Return the number of times the target appears in the array.
4. Support positive numbers, negative numbers, zero, and strings.
5. Return `0` if the target does not exist in the array.
6. Return `0` if the array is empty.
7. Do not modify the original array.

## Examples

| Input                                     | Expected Output |
| ----------------------------------------- | --------------: |
| `([1, 2, 2, 3, 2], 2)`                    |             `3` |
| `([1, 2, 3, 4, 5], 6)`                    |             `0` |
| `(["apple", "banana", "apple"], "apple")` |             `2` |
| `([5, 5, 5, 5], 5)`                       |             `4` |
| `([-1, 0, -1, 2], -1)`                    |             `2` |
| `([1, 2, 3], 1)`                          |             `1` |
| `([], 5)`                                 |             `0` |
| `(["hello"], "world")`                    |             `0` |

## Constraints

- Input will always be an array.
- Do not use external libraries.
- Do not use `.filter()`.
- Do not use `.reduce()`.
- Do not modify the original array.
- Use strict equality (`===`) when comparing values.
- Return a number.

## Learning Goals

- Practice array iteration.
- Understand strict equality (`===`).
- Practice conditional statements.
- Practice counting with a variable.
- Understand how to update a variable during iteration.
- Handle empty arrays and missing values.

## Completion Criteria

All tests in `index.test.js` must pass.
