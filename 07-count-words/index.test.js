import { describe, test, expect } from 'vitest';
import { countWords } from './index.js';

describe('countWords', () => {
  test('counts words in a simple sentence', () => {
    expect(countWords('Hello World')).toBe(2);
  });

  test('counts words in a longer sentence', () => {
    expect(countWords('JavaScript is fun')).toBe(3);
  });

  test('handles a single word', () => {
    expect(countWords('Hello')).toBe(1);
  });

  test('ignores multiple spaces between words', () => {
    expect(countWords('Hello   World')).toBe(2);
  });

  test('ignores leading and trailing spaces', () => {
    expect(countWords('  Hello World  ')).toBe(2);
  });

  test('returns 0 for an empty string', () => {
    expect(countWords('')).toBe(0);
  });

  test('returns 0 for whitespace only', () => {
    expect(countWords('     ')).toBe(0);
  });

  test('handles tabs and newlines as separators', () => {
    expect(countWords('Hello\tWorld\nJavaScript')).toBe(3);
  });

  test('handles multiple types of whitespace', () => {
    expect(countWords('  I  love\tJavaScript\nprogramming  ')).toBe(4);
  });
});
