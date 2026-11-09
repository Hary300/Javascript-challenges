import { describe, test, expect } from 'vitest';
import { findMax } from './index.js';

describe('findMax', () => {
  test('finds the largest number in an array', () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test('finds the largest number when numbers are ascending', () => {
    expect(findMax([10, 20, 30])).toBe(30);
  });

  test('finds the largest number with negative values', () => {
    expect(findMax([-5, -2, -10])).toBe(-2);
  });

  test('handles an array with one element', () => {
    expect(findMax([7])).toBe(7);
  });

  test('handles zero and positive numbers', () => {
    expect(findMax([-1, 0, 1])).toBe(1);
  });

  test('returns null for an empty array', () => {
    expect(findMax([])).toBeNull();
  });

  test('does not modify the original array', () => {
    const numbers = [3, 1, 8, 2];

    findMax(numbers);

    expect(numbers).toEqual([3, 1, 8, 2]);
  });
});
