import ceil from '../src/ceil.js';

describe('ceil function', () => {
  test('rounds up numbers with no precision specified', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(4.1)).toBe(5);
  });

  test('rounds up numbers with positive precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(4.006, 1)).toBe(4.1);
  });

  test('rounds up numbers with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(6040, -1)).toBe(6050);
  });

});
