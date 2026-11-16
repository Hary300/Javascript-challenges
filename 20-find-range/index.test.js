import { describe, it, expect } from 'vitest';
import { findRange } from './index.js';

describe('findRange', () => {
  it('should calculate the range of positive numbers', () => {
    expect(findRange([1, 2, 3, 4, 5])).toBe(4);
  });

  it('should calculate the range of an unordered array', () => {
    expect(findRange([10, 5, 8, 20, 15])).toBe(15);
  });

  it('should support negative numbers', () => {
    expect(findRange([-5, -2, -10])).toBe(8);
  });

  it('should support positive numbers, negative numbers, and zero', () => {
    expect(findRange([-10, 0, 10])).toBe(20);
  });

  it('should return 0 when all numbers are equal', () => {
    expect(findRange([5, 5, 5, 5])).toBe(0);
  });

  it('should return 0 for a single-element array', () => {
    expect(findRange([100])).toBe(0);
  });

  it('should handle zero and negative numbers', () => {
    expect(findRange([0, -5, 5])).toBe(10);
  });

  it('should return null for an empty array', () => {
    expect(findRange([])).toBeNull();
  });

  it('should not modify the original array', () => {
    const numbers = [10, 5, 8, 20, 15];
    const original = [...numbers];

    findRange(numbers);

    expect(numbers).toEqual(original);
  });
});
