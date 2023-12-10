import toNumber from '../src/toNumber.js'


describe('toNumber', () => {
    test('should convert a number to a number', () => {
        expect(toNumber(3.2)).toBe(3.2);
        expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
        expect(toNumber(Infinity)).toBe(Infinity);
        expect(toNumber(0)).toBe(0);
    });

    test('should convert a string to a number', () => {
        expect(toNumber('3.2')).toBe(3.2);
        expect(toNumber('-123.45')).toBe(-123.45);
        expect(toNumber('0')).toBe(0);
    });

    test('should convert a boolean to a number', () => {
        expect(toNumber(true)).toBe(1);
        expect(toNumber(false)).toBe(0);
    });

    test('should convert null and undefined to NaN', () => {
        expect(toNumber(null)).toBe(NaN);
        expect(toNumber(undefined)).toBe(NaN);
    });

    test('should convert an object to NaN', () => {
        expect(toNumber({})).toBe(NaN);
        expect(toNumber({ a: 1 })).toBe(NaN);
    });

    test('should convert a symbol to NaN', () => {
        expect(toNumber(Symbol())).toBe(NaN);
    });

    test('should convert a binary string to a number', () => {
        expect(toNumber('0b1010')).toBe(10);
        expect(toNumber('0b1111')).toBe(15);
    });

    test('should convert an octal string to a number', () => {
        expect(toNumber('0o10')).toBe(8);
        expect(toNumber('0o77')).toBe(63);
    });

    test('should trim leading and trailing whitespace before converting', () => {
        expect(toNumber('  3.2  ')).toBe(3.2);
        expect(toNumber('  -123.45  ')).toBe(-123.45);
    });

    test('should return NaN for bad signed hexadecimal string values', () => {
        expect(toNumber('-0x123')).toBe(NaN);
        expect(toNumber('+0xabc')).toBe(NaN);
    });

    test('should return NaN for objects', () => {
        expect(toNumber({name: 'banana'})).toBe(NaN);
        expect(toNumber([1, 2, 3])).toBe(NaN);
    });
});
