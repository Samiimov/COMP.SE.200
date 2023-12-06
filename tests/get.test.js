import get from '../src/get.js';


describe('get', () => {
    test('should return the value at the specified path', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        
        expect(get(object, 'a[0].b.c')).toBe(3);
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });

    test('should return the default value for undefined resolved values', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        
        expect(get(object, 'a.b.c', 'default')).toBe('default');
        expect(get(object, 'x.y.z', 'default')).toBe('default');
    });

    test('should return undefined if the path does not exist', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        
        expect(get(object, 'x.y.z')).toBeUndefined();
        expect(get(object, ['x', 'y', 'z'])).toBeUndefined();
    });

    test('should return the value at the specified path when path contains special characters', () => {
        const object = { 'a.b': { 'c.d': 5 } };
        
        expect(get(object, 'a.b.c.d')).toBe(5);
        expect(get(object, ['a.b', 'c.d'])).toBe(5);
    });

    test('should return the value at the specified path when path contains nested arrays', () => {
        const object = { 'a': [[{ 'b': { 'c': 3 } }]] };
        
        expect(get(object, 'a[0][0].b.c')).toBe(3);
        expect(get(object, ['a', '0', '0', 'b', 'c'])).toBe(3);
    });

    test('should return undefined if the value is undefined or null', () => {
        expect(get(undefined, 'a.b.c')).toBeUndefined();
        expect(get(null, 'a.b.c')).toBeUndefined();
    });

    test('should not return default if the value is defined', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.c', 'default')).toBe(3);
    });

    test('should not modify the object', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        get(object, 'a[0].b.c');
        expect(object).toEqual({ 'a': [{ 'b': { 'c': 3 } }] });
    });

    test('should handle falsy values', () => {
        const object = { 'a': [{ 'b': { 'c': false } }, { 'd': null }, { 'e': '' }] };
        expect(get(object, 'a[0].b.c')).toBe(false);
        expect(get(object, 'a[1].d')).toBe(null);
        expect(get(object, 'a[2].e')).toBe('');
    });
});

