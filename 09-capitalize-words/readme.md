# Challenge 09 - Capitalize Words

**Difficulty:** Easy

## Description

Create a function called `capitalizeWords` that capitalizes the first letter of every word in a given string.

All remaining letters in each word must be lowercase.

Words are separated by one or more whitespace characters.

## Requirements

1. Create a function named `capitalizeWords`.
2. Accept one string as its parameter.
3. Convert the first character of every word to uppercase.
4. Convert all remaining characters of every word to lowercase.
5. Preserve the order of words.
6. Preserve the original whitespace between words.
7. Return an empty string if the input is empty.

## Examples

| Input                    | Expected Output          |
| ------------------------ | ------------------------ |
| `"hello world"`          | `"Hello World"`          |
| `"javascript challenge"` | `"Javascript Challenge"` |
| `"hELLO wORLD"`          | `"Hello World"`          |
| `"i love coding"`        | `"I Love Coding"`        |
| `"hello"`                | `"Hello"`                |
| `""`                     | `""`                     |
| `"  hello   world  "`    | `"  Hello   World  "`    |

## Constraints

- Input will always be a string.
- Do not use external libraries.
- Do not use regular expressions.
- Do not modify the original string.
- Return a string.

## Learning Goals

- Practice string manipulation.
- Understand uppercase and lowercase conversion.
- Practice accessing individual characters.
- Practice handling whitespace.
- Understand how to preserve the original string structure.

## Completion Criteria

All tests in `test.js` must pass.
