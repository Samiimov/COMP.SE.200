import isEmpty from '../src/isEmpty';

describe('isEmpty function', () => {
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for primitive types', () => {
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(true)).toBe(true);
  });

  test('returns false for non-empty arrays, true for empty ones', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty([])).toBe(true);
  });

  test('returns false for non-empty strings, true for empty ones', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty('')).toBe(true);
  });
  
});
