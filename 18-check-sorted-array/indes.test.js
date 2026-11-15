import { describe, it, expect } from 'vitest';
import { isSorted } from './index.js';

describe('isSorted', () => {
  it('should return true for an ascending array', () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
  });

  it('should allow duplicate numbers', () => {
    expect(isSorted([1, 2, 2, 3, 4])).toBe(true);
  });

  it('should return false for a descending array', () => {
    expect(isSorted([5, 4, 3, 2, 1])).toBe(false);
  });

  it('should return false when an element is out of order', () => {
    expect(isSorted([1, 3, 2, 4, 5])).toBe(false);
  });

  it('should support negative numbers and zero', () => {
    expect(isSorted([-5, -3, -1, 0, 2])).toBe(true);
  });

  it('should return true for a single-element array', () => {
    expect(isSorted([0])).toBe(true);
  });

  it('should return true for an empty array', () => {
    expect(isSorted([])).toBe(true);
  });

  it('should return true when all elements are equal', () => {
    expect(isSorted([1, 1, 1, 1])).toBe(true);
  });

  it('should not modify the original array', () => {
    const numbers = [1, 3, 2, 4, 5];
    const original = [...numbers];

    isSorted(numbers);

    expect(numbers).toEqual(original);
  });
});
