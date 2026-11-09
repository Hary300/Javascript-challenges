import { test, expect } from 'vitest';
import { add, multiply } from './math.js';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds 10 + 5 to equal 15', () => {
  expect(add(10, 5)).toBe(15);
});

test('adds -1 + 1 to equal 0', () => {
  expect(add(-1, 1)).toBe(0);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies 5 * 5 to equal 25', () => {
  expect(multiply(5, 5)).toBe(25);
});

test('multiplies -2 * 3 to equal -6', () => {
  expect(multiply(-2, 3)).toBe(-6);
});
