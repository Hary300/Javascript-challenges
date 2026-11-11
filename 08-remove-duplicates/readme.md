# Challenge 08 - Remove Duplicates

**Difficulty:** Easy

## Description

Create a function called `removeDuplicates` that removes duplicate values from an array.

The function must return a new array containing only unique values.

The original order of elements must be preserved.

## Requirements

1. Create a function named `removeDuplicates`.
2. Accept an array as its parameter.
3. Remove duplicate values.
4. Preserve the original order of the first occurrences.
5. Return an empty array if the input is empty.
6. Do not modify the original array.

## Examples

| Input                  | Expected Output   |
| ---------------------- | ----------------- |
| `[1, 2, 2, 3, 3, 4]`   | `[1, 2, 3, 4]`    |
| `["a", "b", "a", "c"]` | `["a", "b", "c"]` |
| `[1, 1, 1]`            | `[1]`             |
| `[1, 2, 3]`            | `[1, 2, 3]`       |
| `[]`                   | `[]`              |
| `[0, 1, 0, 2]`         | `[0, 1, 2]`       |

## Constraints

- Input will always be an array of primitive values (numbers or strings).
- Do not use external libraries.
- Do not use `Set`.
- Do not modify the original array.
- Return a new array.

## Learning Goals

- Practice array iteration.
- Understand duplicate detection.
- Practice strict equality comparisons.
- Understand how to build a new array.
- Practice handling edge cases.

## Completion Criteria

All tests in `test.js` must pass.
