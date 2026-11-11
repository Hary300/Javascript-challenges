# Challenge 07 - Count Words

**Difficulty:** Easy

## Description

Create a function called `countWords` that counts the number of words in a given string.

Words are separated by one or more whitespace characters.

## Requirements

1. Create a function named `countWords`.
2. Accept one string as its parameter.
3. Return the total number of words.
4. Multiple spaces between words must not increase the word count.
5. Leading and trailing whitespace must be ignored.
6. Return `0` if the input contains only whitespace or is empty.

## Examples

| Input                             | Expected Output |
| --------------------------------- | --------------: |
| `"Hello World"`                   |               2 |
| `"JavaScript is fun"`             |               3 |
| `"Hello"`                         |               1 |
| `"  Hello   World  "`             |               2 |
| `""`                              |               0 |
| `"   "`                           |               0 |
| `"I love JavaScript programming"` |               4 |

## Constraints

- Input will always be a string.
- Do not use external libraries.
- Do not use regular expressions.
- Do not modify the original string.
- Return a number.

## Learning Goals

- Practice string manipulation.
- Understand whitespace handling.
- Practice using string methods.
- Handle empty strings and edge cases.
- Practice breaking down a problem into smaller conditions.

## Completion Criteria

All tests in `test.js` must pass.
