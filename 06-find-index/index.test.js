import { describe, test, expect } from 'vitest';
import { findIndex } from './index.js';

describe('findIndex', () => {
  test('finds an element in the middle of an array', () => {
    expect(findIndex([10, 20, 30, 40], 30)).toBe(2);
  });

  test('finds the first element', () => {
    expect(findIndex([5, 10, 15], 5)).toBe(0);
  });

  test('finds the last element', () => {
    expect(findIndex([5, 10, 15], 15)).toBe(2);
  });

  test('returns -1 when the target does not exist', () => {
    expect(findIndex([1, 2, 3], 9)).toBe(-1);
  });

  test('returns the first index when duplicates exist', () => {
    expect(findIndex([4, 4, 4], 4)).toBe(0);
  });

  test('handles an empty array', () => {
    expect(findIndex([], 10)).toBe(-1);
  });

  test('handles negative numbers', () => {
    expect(findIndex([-10, -5, 0, 5], -5)).toBe(1);
  });

  test('does not modify the original array', () => {
    const numbers = [10, 20, 30];

    findIndex(numbers, 20);

    expect(numbers).toEqual([10, 20, 30]);
  });
});