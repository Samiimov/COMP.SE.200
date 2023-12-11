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
  
  test('returns true for objects with a prototype chain', () => {
    function Constructor() {};
    Constructor.prototype.a = 1;
    expect(isEmpty(new Constructor())).toBe(true);
  });

  test('returns true for empty objects, false for non-empty ones', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('returns true for functions', () => {
    expect(isEmpty(function() {})).toBe(true);
  });

  test('returns true for empty maps and sets, false for non-empty ones', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });

  test('returns true for objects with only non-enumerable properties', () => {
    const obj = Object.defineProperty({}, 'a', { value: 1, enumerable: false });
    expect(isEmpty(obj)).toBe(true);
  });

  test('should return true for empty prototype objects', () => {
    function MyObject() {}
    const prototypeOfMyObject = Object.getPrototypeOf(new MyObject());
    
    // Test that the prototype object is considered empty
    expect(isEmpty(prototypeOfMyObject)).toBe(true);
  });

  test('should return false for prototype objects with properties', () => {
    function MyObject() {}
    const prototypeOfMyObject = Object.getPrototypeOf(new MyObject());
    MyObject.prototype.someProperty = 'some value';

    // Test that the prototype object is no longer considered empty
    expect(isEmpty(prototypeOfMyObject)).toBe(false);
  });

});
