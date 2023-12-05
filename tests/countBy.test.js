// NOTE: the first instance counted by countBy initializes the value to 0, so the count will always be 1 less than the actual count


import test from 'node:test';
import countBy from '../src/countBy.js';

describe('countBy function', () => {

    test('returns an object with the correct keys and values', () => {
        expect(countBy([1, 2, 3, 4, 5], value => value % 2)).toEqual({ '1': 3, '0': 2 });
        expect(countBy([1, 2, 3, 4, 5], value => value > 3)).toEqual({ 'false': 3, 'true': 2 });
    });

    test('returns an empty object when given an empty array', () => {
        expect(countBy([], value => value)).toEqual({});
    });

    test('handles invalid functions', () => {
        expect(() => countBy([1, 2, 3, 4, 5], 'x')).toThrow();
    });

    test('handles invalid inputs', () => {
        expect(countBy(null, value => value)).toEqual({});
        expect(countBy(undefined, value => value)).toEqual({});
        expect(countBy(111, value => value)).toEqual({});
    });

    test('handles various types of inputs in collection', () => {
        expect(countBy([1, 2, "lemon", true, null, undefined, 4], value => typeof value)).toEqual({ 'number': 3, 'string': 1, 'boolean': 1, 'object': 1, 'undefined': 1 });
    });

    // Test case defined in the countBy.js file documentation
    test('can count the number of instances of a specific value', () => {
        const users = 
        [
          { 'user': 'barney', 'active': true },
          { 'user': 'betty', 'active': true },
          { 'user': 'fred', 'active': false }
        ]
        expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
    });

    test('handles nested objects', () => {
        const collection = {'banana': { 'tags': ['fruit', 'food'] },
                            'apple': { 'tags': ['fruit', 'food', 'seasonal'] },
                            'chicken': { 'tags': ['food', 'meat'] }
                            }; 
        expect(countBy(collection, value => value.tags.includes('fruit'))).toEqual({ 'true': 2, 'false': 1 });
    });

    test('handles collections where some objects are missing the key that is being counted', () => {
        const collection = 
        [
            {'user': 'barney', 'producer': true},
            {'user': 'betty', 'producer': false},
            {'user': 'fred'}
        ]
        expect(countBy(collection, value => value.producer)).toEqual({ 'true': 1, 'false': 1, 'undefined': 1 });
    });
});