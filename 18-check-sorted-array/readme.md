# Challenge 18 - Check Sorted Array

**Difficulty:** Easy

## Description

Create a function called `isSorted` that checks whether an array of numbers is sorted in ascending order.

An array is considered sorted in ascending order if every element is less than or equal to the next element.

The function should return `true` if the array is sorted and `false` otherwise.

An empty array or an array containing only one element is considered sorted.

## Requirements

1. Create a function named `isSorted`.
2. Accept an array of numbers as its parameter.
3. Return `true` if the array is sorted in ascending order.
4. Return `false` if any element is greater than the next element.
5. Allow duplicate numbers.
6. Consider an empty array as sorted.
7. Consider an array with one element as sorted.
8. Do not modify the original array.

## Examples

| Input                | Expected Output |
| -------------------- | --------------- |
| `[1, 2, 3, 4, 5]`    | `true`          |
| `[1, 2, 2, 3, 4]`    | `true`          |
| `[5, 4, 3, 2, 1]`    | `false`         |
| `[1, 3, 2, 4, 5]`    | `false`         |
| `[-5, -3, -1, 0, 2]` | `true`          |
| `[0]`                | `true`          |
| `[]`                 | `true`          |
| `[1, 1, 1, 1]`       | `true`          |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.sort()`.
- Do not use `.every()`.
- Do not use `.some()`.
- Do not modify the original array.
- Return a boolean (`true` or `false`).

## Learning Goals

- Practice array iteration.
- Understand array indexing.
- Practice comparing adjacent elements.
- Understand comparison operators (`>` and `<=`).
- Practice conditional statements.
- Understand boolean values.
- Practice handling edge cases.

## Completion Criteria

All tests in `index.test.js` must pass.
