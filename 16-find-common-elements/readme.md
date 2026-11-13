# Challenge 16 - Find Common Elements

**Difficulty:** Easy

## Description

Create a function called `findCommonElements` that finds and returns the unique elements that exist in both arrays.

An element is considered common if it appears at least once in each array.

The returned array must preserve the order in which elements first appear in the first array.

Duplicate values must appear only once in the result.

If there are no common elements, return an empty array.

## Requirements

1. Create a function named `findCommonElements`.
2. Accept two arrays of numbers as parameters.
3. Return a new array containing elements that exist in both arrays.
4. Include each common element only once.
5. Preserve the original order from the first array.
6. Return an empty array if there are no common elements.
7. Do not modify either original array.

## Examples

| Input                       | Expected Output |
| --------------------------- | --------------- |
| `([1, 2, 3], [2, 3, 4])`    | `[2, 3]`        |
| `([1, 2, 3], [4, 5, 6])`    | `[]`            |
| `([1, 2, 2, 3], [2, 3, 4])` | `[2, 3]`        |
| `([5, 3, 1, 2], [1, 2, 3])` | `[3, 1, 2]`     |
| `([1, 1, 2, 2], [1, 2])`    | `[1, 2]`        |
| `([], [1, 2, 3])`           | `[]`            |
| `([1, 2, 3], [])`           | `[]`            |
| `([], [])`                  | `[]`            |

## Constraints

- Input will always be arrays of numbers.
- Do not use external libraries.
- Do not use `.filter()`.
- Do not use `.includes()`.
- Do not use `.indexOf()`.
- Do not use `Set`.
- Do not use `Map`.
- Do not use `.sort()`.
- Do not modify the original arrays.
- Use strict equality (`===`) when comparing values.

## Learning Goals

- Practice nested loops.
- Understand how to compare elements from two arrays.
- Practice conditional statements.
- Understand how to prevent duplicate values.
- Practice building a new array.
- Improve problem-solving skills.

## Completion Criteria

All tests in `index.test.js` must pass.
