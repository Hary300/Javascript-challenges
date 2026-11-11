import { describe, test, expect } from 'vitest';
import { removeDuplicates } from './index.js';

describe('removeDuplicates', () => {
  test('removes duplicate numbers', () => {
    expect(removeDuplicates([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('removes duplicate strings', () => {
    expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('handles an array containing only duplicates', () => {
    expect(removeDuplicates([1, 1, 1])).toEqual([1]);
  });

  test('preserves the original order', () => {
    expect(removeDuplicates([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });

  test('handles an array without duplicates', () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('handles an empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test('handles zero as a value', () => {
    expect(removeDuplicates([0, 1, 0, 2])).toEqual([0, 1, 2]);
  });

  test('does not modify the original array', () => {
    const numbers = [1, 2, 2, 3];

    removeDuplicates(numbers);

    expect(numbers).toEqual([1, 2, 2, 3]);
  });

  test('returns a new array', () => {
    const numbers = [1, 2, 3];
    const result = removeDuplicates(numbers);

    expect(result).not.toBe(numbers);
  });
});
