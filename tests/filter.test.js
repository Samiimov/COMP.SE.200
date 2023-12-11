import filter from '../src/filter.js';


describe('filter', () => {
    test('should return an empty array when given an empty array', () => {
        const array = [];
        const predicate = () => true;
        const result = filter(array, predicate);
        expect(result).toEqual([]);
    });

    test('should return a new array with elements that satisfy the predicate', () => {
        const products = 
        [
            { 'product': 'banana', 'inStock': true },
            { 'product': 'carrot', 'inStock': false },
            { 'product': 'apple',  'inStock': true },
        ];
        const predicate = ({ inStock }) => inStock;
        const result = filter(products, predicate);
        expect(result).toEqual([{ 'product': 'banana', 'inStock': true }, { 'product': 'apple',  'inStock': true }]);
    });

    test('should return a new array with objects that satisfy the predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ];
        const predicate = ({ active }) => active;
        const result = filter(users, predicate);
        expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
    });

    test('should handle falsy values returned by the predicate', () => {
        const array = [0, false, null, undefined, NaN, ''];
        const predicate = (value) => value;
        const result = filter(array, predicate);
        expect(result).toEqual([]);
    });

    test('should return the original array when the predicate is always true', () => {
        const array = [0, false, null, undefined, NaN, ''];
        const predicate = () => true;
        let result = filter(array, predicate);
        expect(result).toEqual(array);
    });

    test('should handle arrays with different types of values', () => {
        const array = ['1', 2, 3, 4, 5, 'string', undefined, true, null];
        const predicate = (value) => value % 2 === 0;
        const result = filter(array, predicate);
        expect(result).toEqual([2, 4, null]); // null is considered zero
    });

    test('should not modify the original array', () => {
        let array = [1, 2, 3, 4, 5];
        const predicate = (value) => value % 2 === 0;
        const result = filter(array, predicate);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle null arrays', () => {
        const array = null;
        expect(filter(array, () => true)).toEqual([]);
    });
});
