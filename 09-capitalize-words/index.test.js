import { describe, test, expect } from 'vitest';
import { capitalizeWords } from './index.js';

describe('capitalizeWords', () => {
  test('capitalizes a simple sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('capitalizes multiple words', () => {
    expect(capitalizeWords('javascript challenge')).toBe(
      'Javascript Challenge'
    );
  });

  test('converts remaining characters to lowercase', () => {
    expect(capitalizeWords('hELLO wORLD')).toBe('Hello World');
  });

  test('capitalizes a single word', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('handles an empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('preserves multiple spaces', () => {
    expect(capitalizeWords('hello   world')).toBe('Hello   World');
  });

  test('preserves leading and trailing spaces', () => {
    expect(capitalizeWords('  hello world  ')).toBe('  Hello World  ');
  });

  test('handles tabs and newlines', () => {
    expect(capitalizeWords('hello\tworld\njavascript')).toBe(
      'Hello\tWorld\nJavascript'
    );
  });
});
