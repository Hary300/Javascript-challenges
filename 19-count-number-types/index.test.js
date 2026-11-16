import { describe, it, expect } from 'vitest';
import { countNumberTypes } from './index.js';

describe('countNumberTypes', () => {
  it('should count positive numbers, negative numbers, and zeros', () => {
    expect(countNumberTypes([1, -2, 0, 3, -4, 0])).toEqual({
      positive: 2,
      negative: 2,
      zero: 2,
    });
  });

  it('should handle an array containing only positive numbers', () => {
    expect(countNumberTypes([1, 2, 3, 4])).toEqual({
      positive: 4,
      negative: 0,
      zero: 0,
    });
  });

  it('should handle an array containing only negative numbers', () => {
    expect(countNumberTypes([-1, -2, -3])).toEqual({
      positive: 0,
      negative: 3,
      zero: 0,
    });
  });

  it('should handle an array containing only zeros', () => {
    expect(countNumberTypes([0, 0, 0])).toEqual({
      positive: 0,
      negative: 0,
      zero: 3,
    });
  });

  it('should handle one positive, one negative, and one zero', () => {
    expect(countNumberTypes([-5, 0, 5])).toEqual({
      positive: 1,
      negative: 1,
      zero: 1,
    });
  });

  it('should handle a single positive number', () => {
    expect(countNumberTypes([7])).toEqual({
      positive: 1,
      negative: 0,
      zero: 0,
    });
  });

  it('should return zero counts for an empty array', () => {
    expect(countNumberTypes([])).toEqual({
      positive: 0,
      negative: 0,
      zero: 0,
    });
  });

  it('should not modify the original array', () => {
    const numbers = [1, -2, 0, 3, -4, 0];
    const original = [...numbers];

    countNumberTypes(numbers);

    expect(numbers).toEqual(original);
  });
});
