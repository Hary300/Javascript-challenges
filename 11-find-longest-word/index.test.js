import { describe, it, expect } from 'vitest';
import { findLongestWord } from './index.js';

describe('findLongestWord', () => {
  it('should return the longest word', () => {
    expect(findLongestWord(['apple', 'banana', 'kiwi'])).toBe('banana');
  });

  it('should handle words with different lengths', () => {
    expect(findLongestWord(['cat', 'elephant', 'dog'])).toBe('elephant');
  });

  it('should handle uppercase and lowercase letters', () => {
    expect(findLongestWord(['JavaScript', 'Python', 'Java'])).toBe(
      'JavaScript'
    );
  });

  it('should return the first word when multiple words have the same length', () => {
    expect(findLongestWord(['hello', 'world'])).toBe('hello');
  });

  it('should return the longest word when it appears last', () => {
    expect(findLongestWord(['a', 'ab', 'abc'])).toBe('abc');
  });

  it('should handle a single word', () => {
    expect(findLongestWord(['hello'])).toBe('hello');
  });

  it('should return null for an empty array', () => {
    expect(findLongestWord([])).toBeNull();
  });

  it('should not modify the original array', () => {
    const words = ['apple', 'banana', 'kiwi'];
    const original = [...words];

    findLongestWord(words);

    expect(words).toEqual(original);
  });
});
