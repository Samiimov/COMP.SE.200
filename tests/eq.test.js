import eq from '../src/eq.js';

describe('eq function', () => {
    test('returns true for the same object', () => {
      const object = { 'a': 1 };
      expect(eq(object, object)).toBe(true);
    });
  
    test('returns false for different objects with same content', () => {
      const object = { 'a': 1 };
      const other = { 'a': 1 };
      expect(eq(object, other)).toBe(false);
    });
  
    test('correctly compares primitive values', () => {
      expect(eq('a', 'a')).toBe(true);
      expect(eq('a', 'b')).toBe(false);
      expect(eq(1, 1)).toBe(true);
      expect(eq(1, 2)).toBe(false);
    });
  
    test('returns true for NaN comparisons', () => {
      expect(eq(NaN, NaN)).toBe(true);
    });
  
    test('returns false for mixed types', () => {
      expect(eq('a', Object('a'))).toBe(false);
      expect(eq(1, Object(1))).toBe(false);
    });
  
    test('correctly compares null and undefined', () => {
      expect(eq(null, null)).toBe(true);
      expect(eq(undefined, undefined)).toBe(true);
      expect(eq(null, undefined)).toBe(false);
    });
  
});