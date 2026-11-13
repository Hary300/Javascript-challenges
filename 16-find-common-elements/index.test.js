import { describe, it, expect } from 'vitest';
import { findCommonElements } from './index.js';

describe('findCommonElements', () => {
  it('should return elements that exist in both arrays', () => {
    expect(findCommonElements([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('should return an empty array when there are no common elements', () => {
    expect(findCommonElements([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('should not include duplicate elements in the result', () => {
    expect(findCommonElements([1, 2, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('should preserve the order from the first array', () => {
    expect(findCommonElements([5, 3, 1, 2], [1, 2, 3])).toEqual([3, 1, 2]);
  });

  it('should include each common element only once', () => {
    expect(findCommonElements([1, 1, 2, 2], [1, 2])).toEqual([1, 2]);
  });

  it('should handle an empty first array', () => {
    expect(findCommonElements([], [1, 2, 3])).toEqual([]);
  });

  it('should handle an empty second array', () => {
    expect(findCommonElements([1, 2, 3], [])).toEqual([]);
  });

  it('should handle two empty arrays', () => {
    expect(findCommonElements([], [])).toEqual([]);
  });

  it('should not modify the original arrays', () => {
    const first = [1, 2, 2, 3];
    const second = [2, 3, 4];
    const originalFirst = [...first];
    const originalSecond = [...second];

    findCommonElements(first, second);

    expect(first).toEqual(originalFirst);
    expect(second).toEqual(originalSecond);
  });
});
