import { describe, it, expect } from 'vitest';
import { countOccurrences } from './index.js';

describe('countOccurrences', () => {
  it('should count occurrences of a number', () => {
    expect(countOccurrences([1, 2, 2, 3, 2], 2)).toBe(3);
  });

  it('should return 0 when the target does not exist', () => {
    expect(countOccurrences([1, 2, 3, 4, 5], 6)).toBe(0);
  });

  it('should count occurrences of a string', () => {
    expect(countOccurrences(['apple', 'banana', 'apple'], 'apple')).toBe(2);
  });

  it('should count all matching values', () => {
    expect(countOccurrences([5, 5, 5, 5], 5)).toBe(4);
  });

  it('should support negative numbers and zero', () => {
    expect(countOccurrences([-1, 0, -1, 2], -1)).toBe(2);
  });

  it('should count a single occurrence', () => {
    expect(countOccurrences([1, 2, 3], 1)).toBe(1);
  });

  it('should return 0 for an empty array', () => {
    expect(countOccurrences([], 5)).toBe(0);
  });

  it('should return 0 when the target does not match a single value', () => {
    expect(countOccurrences(['hello'], 'world')).toBe(0);
  });

  it('should not modify the original array', () => {
    const numbers = [1, 2, 2, 3, 2];
    const original = [...numbers];

    countOccurrences(numbers, 2);

    expect(numbers).toEqual(original);
  });
});
