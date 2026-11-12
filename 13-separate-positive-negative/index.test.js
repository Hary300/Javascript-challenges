import { describe, it, expect } from 'vitest';
import { separateNumbers } from './index.js';

describe('separateNumbers', () => {
  it('should separate positive and negative numbers', () => {
    expect(separateNumbers([1, -2, 3, -4, 5])).toEqual({
      positive: [1, 3, 5],
      negative: [-2, -4],
    });
  });

  it('should handle an array containing only negative numbers', () => {
    expect(separateNumbers([-1, -2, -3])).toEqual({
      positive: [],
      negative: [-1, -2, -3],
    });
  });

  it('should handle an array containing only positive numbers', () => {
    expect(separateNumbers([1, 2, 3])).toEqual({
      positive: [1, 2, 3],
      negative: [],
    });
  });

  it('should ignore zero', () => {
    expect(separateNumbers([0, 0, 0])).toEqual({
      positive: [],
      negative: [],
    });
  });

  it('should preserve the original order', () => {
    expect(separateNumbers([-5, 0, 5, -10, 10])).toEqual({
      positive: [5, 10],
      negative: [-5, -10],
    });
  });

  it('should handle an array containing a single zero', () => {
    expect(separateNumbers([0])).toEqual({
      positive: [],
      negative: [],
    });
  });

  it('should return empty arrays for an empty input', () => {
    expect(separateNumbers([])).toEqual({
      positive: [],
      negative: [],
    });
  });

  it('should not modify the original array', () => {
    const numbers = [1, -2, 3, -4, 5];
    const original = [...numbers];

    separateNumbers(numbers);

    expect(numbers).toEqual(original);
  });
});
