import capitalize from '../src/capitalize.js';

import capitalize from './capitalize';

describe('capitalize function', () => {
  test('capitalizes regular strings', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('returns an empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('handles strings starting with non-letter characters', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('!hello')).toBe('!hello');
  });

  test('converts uppercase strings to capitalized form', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('handles lowercase strings', () => {
    expect(capitalize('already')).toBe('Already');
  });

  test('handles mixed case strings', () => {
    expect(capitalize('hElLo')).toBe('Hello');
  });

});
