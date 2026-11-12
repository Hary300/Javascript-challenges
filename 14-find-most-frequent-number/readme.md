# Challenge 14 - Find Most Frequent Number

**Difficulty:** Easy

## Description

Create a function called `findMostFrequent` that finds and returns the number that appears most frequently in an array.

If multiple numbers have the same highest frequency, return the number that appears first in the original array.

If the array is empty, return `null`.

## Requirements

1. Create a function named `findMostFrequent`.
2. Accept an array of numbers as its parameter.
3. Return the number that appears most frequently.
4. Count how many times each number appears.
5. If multiple numbers have the same frequency, return the one that appears first in the original array.
6. Support positive numbers, negative numbers, and zero.
7. Return `null` if the array is empty.
8. Do not modify the original array.

## Examples

| Input                   | Expected Output |
| ----------------------- | --------------: |
| `[1, 2, 2, 3, 2, 4]`    |             `2` |
| `[5, 5, 3, 3, 3, 5, 5]` |             `5` |
| `[1, 2, 3, 4]`          |             `1` |
| `[-1, -2, -1, -3, -1]`  |            `-1` |
| `[0, 1, 0, 2, 0]`       |             `0` |
| `[7]`                   |             `7` |
| `[4, 4, 2, 2]`          |             `4` |
| `[]`                    |          `null` |

## Constraints

- Input will always be an array of numbers.
- Do not use external libraries.
- Do not use `.sort()`.
- Do not use `Map`.
- Do not use `Set`.
- Do not modify the original array.
- Return a number or `null`.

## Learning Goals

- Practice array iteration.
- Practice nested loops.
- Understand frequency counting.
- Practice comparison operators.
- Practice tracking multiple values.
- Handle ties and edge cases.

## Completion Criteria

All tests in `index.test.js` must pass.
