import { describe, test, expect } from 'vitest';
import { countVowels } from './index.js';

describe('countVowels', () => {
  test('counts vowels in a lowercase string', () => {
    expect(countVowels('hello')).toBe(2);
  });

  test('counts vowels in an uppercase string', () => {
    expect(countVowels('HELLO')).toBe(2);
  });

  test('counts vowels in a mixed-case string', () => {
    expect(countVowels('OpenAI')).toBe(4);
  });

  test('returns 0 when there are no vowels', () => {
    expect(countVowels('rhythm')).toBe(0);
  });

  test('returns 0 for an empty string', () => {
    expect(countVowels('')).toBe(0);
  });

  test('ignores spaces and punctuation', () => {
    expect(countVowels('Hello, World!')).toBe(3);
  });

  test('counts repeated vowels', () => {
    expect(countVowels('beautiful')).toBe(5);
  });

  test('ignores numbers', () => {
    expect(countVowels('h3ll0 w0rld')).toBe(0);
  });
});
