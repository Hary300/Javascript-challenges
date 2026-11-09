import { describe, test, expect } from 'vitest';
import { reverseString } from './index.js';

describe('reverseString', () => {
  test('reverses a lowercase string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a mixed-case string', () => {
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
  });

  test('reverses a string containing numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('handles a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('handles an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('preserves spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('handles repeated characters', () => {
    expect(reverseString('aaaa')).toBe('aaaa');
  });

  test('does not modify the original string', () => {
    const original = 'hello';

    reverseString(original);

    expect(original).toBe('hello');
  });
});
