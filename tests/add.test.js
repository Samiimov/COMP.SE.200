import add from '../src/add.js';

describe('add function', () => {
  test('adds two integers', () => {
    expect(add(6, 4)).toBe(10);
    expect(add(-6, 4)).toBe(-2);
    expect(add(-6, -4)).toBe(-10);
  });

  test('adds two decimal numbers', () => {
    expect(add(6.5, 5.2)).toBeCloseTo(11.7);
    expect(add(-6.6, -4.3)).toBeCloseTo(-10.9);
    expect(add(2.6, -1.2)).toBeCloseTo(1.4);
  });

  test('correctly handles zero', () => {
    expect(add(10, 0)).toBe(10);
    expect(add(0, 10)).toBe(10);
    expect(add(0, 0)).toBe(0);
  });

  test('handles large numbers without issues', () => {
    expect(add(Number.MAX_SAFE_INTEGER - 10, 5)).toBe(Number.MAX_SAFE_INTEGER - 5);
    expect(add(-Number.MAX_SAFE_INTEGER + 100, -50)).toBe(-Number.MAX_SAFE_INTEGER + 50);
    expect(add(100000000000, 100000000000)).toBe(200000000000);
  });

//   test('handles addition with booleans', () => {
//     expect(add(true, false)).toBe(1);
//     expect(add(true, 10)).toBe(11);
//     expect(add(10, false)).toBe(10);
//   });

  test('handles invalid inputs', () => {
    expect(() => add(true, false)).toThrow();
    expect(() => add('x', 'y')).toThrow();
    expect(() => add(null, undefined)).toThrow();
  });

});