# Challenge 17 - Remove Specific Element

**Difficulty:** Easy

## Description

Create a function called `removeElement` that removes all occurrences of a specific value from an array.

The function should return a new array containing all elements except those matching the target value.

Maintain the original order of the remaining elements.

If the target value does not exist in the array, return a new array containing all original elements.

## Requirements

1. Create a function named `removeElement`.
2. Accept an array of numbers and a target number as parameters.
3. Return a new array without the target value.
4. Remove all occurrences of the target value.
5. Preserve the original order of the remaining elements.
6. Return an empty array if all elements match the target.
7. Do not modify the original array.

## Examples

| Input                  | Expected Output |
| ---------------------- | --------------- |
| `([1, 2, 3, 2, 4], 2)` | `[1, 3, 4]`     |
| `([1, 2, 3, 4], 5)`    | `[1, 2, 3, 4]`  |
| `([5, 5, 5], 5)`       | `[]`            |
| `([1, 2, 3, 4, 5], 3)` | `[1, 2, 4, 5]`  |
| `([-1, 0, -1, 2], -1)` | `[0, 2]`        |
| `([1], 1)`             | `[]`            |
| `([1, 2, 3], 1)`       | `[2, 3]`        |
| `([], 5)`              | `[]`            |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.filter()`.
- Do not use `.splice()`.
- Do not use `.sort()`.
- Do not use `.push()`.
- Do not use the spread operator (`...`).
- Do not modify the original array.
- Use strict equality (`===`) when comparing values.
- Return a new array.

## Learning Goals

- Practice array iteration.
- Practice conditional statements.
- Understand how to exclude specific values.
- Practice creating a new array.
- Understand how to preserve element order.
- Practice handling duplicate values.
- Understand the difference between modifying an array and creating a new one.

## Completion Criteria

All tests in `index.test.js` must pass.
