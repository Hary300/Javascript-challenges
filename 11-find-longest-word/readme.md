# Challenge 11 - Find Longest Word

**Difficulty:** Easy

## Description

Create a function called `findLongestWord` that finds and returns the longest word in an array of strings.

If multiple words have the same maximum length, return the first word that appears in the array.

If the array is empty, return `null`.

## Requirements

1. Create a function named `findLongestWord`.
2. Accept an array of strings as its parameter.
3. Return the longest word in the array.
4. If multiple words have the same length, return the first one.
5. Return `null` if the array is empty.
6. Support strings containing uppercase and lowercase letters.
7. Do not modify the original array.

## Examples

| Input                                  | Expected Output |
| -------------------------------------- | --------------- |
| `["apple", "banana", "kiwi"]`          | `"banana"`      |
| `["cat", "elephant", "dog"]`           | `"elephant"`    |
| `["JavaScript", "Python", "Java"]`     | `"JavaScript"`  |
| `["hello", "world"]`                   | `"hello"`       |
| `["a", "ab", "abc"]`                   | `"abc"`         |
| `["frontend", "backend", "fullstack"]` | `"fullstack"`   |
| `["hello"]`                            | `"hello"`       |
| `[]`                                   | `null`          |

## Constraints

- Input will always be an array of strings.
- Do not use external libraries.
- Do not use `.sort()`.
- Do not modify the original array.
- If multiple words have the same maximum length, return the first one.
- Return a string or `null`.

## Learning Goals

- Practice array iteration.
- Understand the `.length` property.
- Practice comparison operators.
- Practice conditional statements.
- Understand how to track the longest value.
- Handle edge cases.

## Completion Criteria

All tests in `index.test.js` must pass.
