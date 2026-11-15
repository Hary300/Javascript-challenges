import { describe, it, expect } from 'vitest';
import { removeElement } from './index.js';

describe('removeElement', () => {
  it('should remove all occurrences of the target value', () => {
    expect(removeElement([1, 2, 3, 2, 4], 2)).toEqual([1, 3, 4]);
  });

  it('should return all elements when the target does not exist', () => {
    expect(removeElement([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('should return an empty array when all elements match the target', () => {
    expect(removeElement([5, 5, 5], 5)).toEqual([]);
  });

  it('should preserve the original order', () => {
    expect(removeElement([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
  });

  it('should support negative numbers and zero', () => {
    expect(removeElement([-1, 0, -1, 2], -1)).toEqual([0, 2]);
  });

  it('should handle a single matching element', () => {
    expect(removeElement([1], 1)).toEqual([]);
  });

  it('should handle removing the first element', () => {
    expect(removeElement([1, 2, 3], 1)).toEqual([2, 3]);
  });

  it('should handle an empty array', () => {
    expect(removeElement([], 5)).toEqual([]);
  });

  it('should return a new array without modifying the original array', () => {
    const numbers = [1, 2, 3, 2, 4];
    const original = [...numbers];

    const result = removeElement(numbers, 2);

    expect(numbers).toEqual(original);
    expect(result).not.toBe(numbers);
  });
});
