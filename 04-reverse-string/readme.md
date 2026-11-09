# Challenge 04 - Reverse String

**Difficulty:** Easy

## Description

Create a function called `reverseString` that reverses the order of characters in a given string.

The function must return a new string with the characters in reverse order.

## Requirements

1. Create a function named `reverseString`.
2. Accept one string as its parameter.
3. Reverse the order of all characters.
4. Preserve uppercase and lowercase characters.
5. Return an empty string when the input is empty.
6. Do not modify the original input.

## Examples

| Input           | Expected Output |
| --------------- | --------------- |
| `"hello"`       | `"olleh"`       |
| `"JavaScript"`  | `"tpircSavaJ"`  |
| `"12345"`       | `"54321"`       |
| `"a"`           | `"a"`           |
| `""`            | `""`            |
| `"hello world"` | `"dlrow olleh"` |

## Constraints

- Input will always be a string.
- Do not use external libraries.
- Do not use `.reverse()`.
- Do not use `.split()` or `.join()`.
- Return a string.

## Learning Goals

- Practice string indexing.
- Understand character positions.
- Practice looping through a string.
- Practice building a new string.

## Completion Criteria

All tests in `test.js` must pass.
