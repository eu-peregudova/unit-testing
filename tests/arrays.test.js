LodashArray = require('../src/arrays.js')

let lodash = new LodashArray;

describe('Lodash: chunk', () => {
    let testArray;

    beforeEach(() => {
        testArray = ['a', 'b', 1, 2, 6, true]
    })

    test('should be defined', () => {
        expect(lodash.chunk).toBeDefined()
        expect(lodash.chunk).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.chunk(testArray, 2)).toBeInstanceOf(Array)
    })

    test(`should an array of elements split into groups the length of size
    If array can't be split evenly, the final chunk will be the remaining elements`, () => {
        expect(lodash.chunk(testArray, 2)).toBe([['a', 'b'], [1, 2], [6, true]])
        expect(lodash.chunk(testArray, 3)).toBe([['a', 'b', 1], [2, 6, true]])
        expect(lodash.chunk(testArray, 4)).toBe([['a', 'b', 1, 2], [6, true]])
    })
})

describe('Lodash: compact', () => {
    let testArray;

    beforeEach(() => {
        testArray = [null, 'a', '', 0, 2, 6, true, false, undefined, NaN]
    })

    test('should be defined', () => {
        expect(lodash.compact).toBeDefined()
        expect(lodash.compact).not.toBeUndefined()
    })

    test('should return array', () => {
        expect(lodash.compact(testArray)).toBeInstanceOf(Array)
    })

    test('should return array of truthy values', () => {
        const result = testArray.filter((val) => !!val)
        expect(lodash.compact(testArray)).toBe(result)
    })
})
