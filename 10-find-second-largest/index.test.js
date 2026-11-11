import { describe, test, expect } from 'vitest';
import { findSecondLargest } from './index.js';

describe('findSecondLargest', () => {
  test('finds the second-largest number', () => {
    expect(findSecondLargest([10, 5, 8, 20, 15])).toBe(15);
  });

  test('handles ascending numbers', () => {
    expect(findSecondLargest([1, 2, 3, 4, 5])).toBe(4);
  });

  test('ignores duplicate values', () => {
    expect(findSecondLargest([10, 10, 8, 8, 5])).toBe(8);
  });

  test('handles negative numbers', () => {
    expect(findSecondLargest([-5, -2, -10])).toBe(-5);
  });

  test('handles zero and negative numbers', () => {
    expect(findSecondLargest([-1, 0, 1])).toBe(0);
  });

  test('returns null when all numbers are identical', () => {
    expect(findSecondLargest([5, 5, 5])).toBeNull();
  });

  test('returns null for a single-element array', () => {
    expect(findSecondLargest([7])).toBeNull();
  });

  test('returns null for an empty array', () => {
    expect(findSecondLargest([])).toBeNull();
  });

  test('does not modify the original array', () => {
    const numbers = [10, 5, 8, 20, 15];

    findSecondLargest(numbers);

    expect(numbers).toEqual([10, 5, 8, 20, 15]);
  });
});
