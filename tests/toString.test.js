import toString from '../src/toString.js';

describe('toString function', () => {
  test('converts null to an empty string', () => {
    expect(toString(null)).toBe('');
  });

  test('converts undefined to an empty string', () => {
    expect(toString(undefined)).toBe('');
  });

  test('preserves the sign of -0', () => {
    expect(toString(-0)).toBe('-0');
  });

  test('converts an array to a string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  test('converts nested arrays to a string', () => {
    expect(toString([1, [2, 3]])).toBe('1,2,3');
  });

  test('converts symbols to a string', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).toBe(symbol.toString());
  });

  test('converts numbers to a string', () => {
    expect(toString(123)).toBe('123');
    expect(toString(-123)).toBe('-123');
    expect(toString(12.3)).toBe('12.3');
  });

  test('returns strings as is', () => {
    expect(toString('abc')).toBe('abc');
  });

});
