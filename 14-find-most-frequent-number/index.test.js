import { describe, it, expect } from 'vitest';
import { findMostFrequent } from './index.js';

describe('findMostFrequent', () => {
  it('should return the number that appears most frequently', () => {
    expect(findMostFrequent([1, 2, 2, 3, 2, 4])).toBe(2);
  });

  it('should handle a number that appears more frequently than another', () => {
    expect(findMostFrequent([5, 5, 3, 3, 3, 5, 5])).toBe(5);
  });

  it('should return the first number when all frequencies are equal', () => {
    expect(findMostFrequent([1, 2, 3, 4])).toBe(1);
  });

  it('should support negative numbers', () => {
    expect(findMostFrequent([-1, -2, -1, -3, -1])).toBe(-1);
  });

  it('should support zero', () => {
    expect(findMostFrequent([0, 1, 0, 2, 0])).toBe(0);
  });

  it('should handle a single element', () => {
    expect(findMostFrequent([7])).toBe(7);
  });

  it('should return the first occurring number when frequencies are tied', () => {
    expect(findMostFrequent([4, 4, 2, 2])).toBe(4);
  });

  it('should return null for an empty array', () => {
    expect(findMostFrequent([])).toBeNull();
  });

  it('should not modify the original array', () => {
    const numbers = [1, 2, 2, 3, 2, 4];
    const original = [...numbers];

    findMostFrequent(numbers);

    expect(numbers).toEqual(original);
  });
});
