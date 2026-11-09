import { describe, test, expect } from 'vitest';
import { sumArray } from './index.js';

describe('sumArray', () => {
  test('calculates the sum of positive numbers', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  test('calculates the sum of larger numbers', () => {
    expect(sumArray([10, 20, 30])).toBe(60);
  });

  test('handles negative numbers', () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
  });

  test('handles mixed positive and negative numbers', () => {
    expect(sumArray([10, -5, 3])).toBe(8);
  });

  test('handles an array with one element', () => {
    expect(sumArray([7])).toBe(7);
  });

  test('returns 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  test('does not modify the original array', () => {
    const numbers = [1, 2, 3];

    sumArray(numbers);

    expect(numbers).toEqual([1, 2, 3]);
  });

  test('handles zeros', () => {
    expect(sumArray([0, 0, 0])).toBe(0);
  });
});
