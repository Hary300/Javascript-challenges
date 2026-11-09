import { describe, test, expect } from 'vitest';
import { filterEvenNumbers } from './index.js';

describe('filterEvenNumbers', () => {
  test('returns only even numbers', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test('returns an empty array when there are no even numbers', () => {
    expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
  });

  test('returns all numbers when every number is even', () => {
    expect(filterEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
  });

  test('handles negative even numbers and zero', () => {
    expect(filterEvenNumbers([-2, -3, 0, 5])).toEqual([-2, 0]);
  });

  test('handles an empty array', () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });

  test('preserves the original order', () => {
    expect(filterEvenNumbers([8, 3, 2, 5, 4])).toEqual([8, 2, 4]);
  });

  test('does not modify the original array', () => {
    const numbers = [1, 2, 3, 4];

    filterEvenNumbers(numbers);

    expect(numbers).toEqual([1, 2, 3, 4]);
  });
});
