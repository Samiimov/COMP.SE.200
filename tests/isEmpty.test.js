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

  test('returns true for objects with a prototype chain', () => {
    function Constructor() {};
    Constructor.prototype.a = 1;
    expect(isEmpty(new Constructor())).toBe(true);
  });

  test('returns true for an empty buffer', () => {
    const emptyBuffer = Buffer.alloc(0);
    expect(isEmpty(emptyBuffer)).toBe(true);
  });
  
  test('returns false for a non-empty buffer', () => {
    const nonEmptyBuffer = Buffer.alloc(10);
    expect(isEmpty(nonEmptyBuffer)).toBe(false);
  });

  test('returns true for an empty TypedArray', () => {
    const emptyTypedArray = new Uint8Array();
    expect(isEmpty(emptyTypedArray)).toBe(true);
  });
  
  test('returns false for a non-empty TypedArray', () => {
    const nonEmptyTypedArray = new Uint8Array(10);
    expect(isEmpty(nonEmptyTypedArray)).toBe(false);
  });

  test('returns true for an empty arguments object', () => {
    const emptyArguments = (function() { return arguments })();
    expect(isEmpty(emptyArguments)).toBe(true);
  });
  
  test('returns false for a non-empty arguments object', () => {
    const nonEmptyArguments = (function() { return arguments })(1, 2, 3);
    expect(isEmpty(nonEmptyArguments)).toBe(false);
  });

});
