# Challenge 15 - Merge Arrays

**Difficulty:** Easy

## Description

Create a function called `mergeArrays` that combines two arrays into a single new array.

The function should preserve the original order of elements:

- All elements from the first array must appear first.
- All elements from the second array must appear afterward.

Duplicate values are allowed.

If both arrays are empty, return an empty array.

## Requirements

1. Create a function named `mergeArrays`.
2. Accept two arrays as parameters.
3. Return a new array containing elements from both arrays.
4. Preserve the original order of elements.
5. Allow duplicate values.
6. Handle empty arrays.
7. Do not modify either original array.

## Examples

| Input                    | Expected Output      |
| ------------------------ | -------------------- |
| `([1, 2, 3], [4, 5, 6])` | `[1, 2, 3, 4, 5, 6]` |
| `([1, 2], [3, 4])`       | `[1, 2, 3, 4]`       |
| `([1, 1], [2, 2])`       | `[1, 1, 2, 2]`       |
| `([], [1, 2, 3])`        | `[1, 2, 3]`          |
| `([1, 2, 3], [])`        | `[1, 2, 3]`          |
| `([], [])`               | `[]`                 |
| `([5], [10])`            | `[5, 10]`            |

## Constraints

- Input will always be arrays.
- Do not use external libraries.
- Do not use `.concat()`.
- Do not use `.push()`.
- Do not use the spread operator (`...`).
- Do not modify the original arrays.
- Return a new array.

## Learning Goals

- Practice array iteration.
- Practice creating new arrays.
- Understand array indexing.
- Practice accessing elements using their indexes.
- Understand how to preserve element order.
- Practice working with multiple parameters.

## Completion Criteria

All tests in `index.test.js` must pass.
