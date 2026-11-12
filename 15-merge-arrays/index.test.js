import { describe, it, expect } from 'vitest';
import { mergeArrays } from './index.js';

describe('mergeArrays', () => {
  it('should merge two arrays', () => {
    expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should preserve the order of elements', () => {
    expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should allow duplicate values', () => {
    expect(mergeArrays([1, 1], [2, 2])).toEqual([1, 1, 2, 2]);
  });

  it('should handle an empty first array', () => {
    expect(mergeArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an empty second array', () => {
    expect(mergeArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('should return an empty array when both arrays are empty', () => {
    expect(mergeArrays([], [])).toEqual([]);
  });

  it('should handle two arrays containing one element each', () => {
    expect(mergeArrays([5], [10])).toEqual([5, 10]);
  });

  it('should return a new array without modifying the original arrays', () => {
    const first = [1, 2, 3];
    const second = [4, 5, 6];

    const result = mergeArrays(first, second);

    expect(first).toEqual([1, 2, 3]);
    expect(second).toEqual([4, 5, 6]);
    expect(result).not.toBe(first);
    expect(result).not.toBe(second);
  });
});
