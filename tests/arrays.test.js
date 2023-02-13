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

describe('Lodash: drop', () => {
    let testArray;

    beforeEach(() => {
        testArray = [1, 2, 3, 4, 5]
    })

    test('should be defined', () => {
        expect(lodash.drop).toBeDefined()
        expect(lodash.drop).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.drop()).toBeInstanceOf(Array)
    })

    test('default number of dropped elements is 1', () => {
        expect(lodash.drop(testArray)).toBe([2, 3, 4, 5])
        expect(lodash.drop(testArray)).toBe(lodash.drop(testArray, 1))
    })

    test('should return as is if number of dropped elements is 0', () => {
        expect(lodash.drop(testArray, 0)).toBe([1, 2, 3, 4, 5])
        expect(lodash.drop(testArray, 0)).toBe(testArray)
    })

    test('should creates a slice of array with n elements dropped from the beginning', () => {
        expect(lodash.drop(testArray, 2)).toBe([3, 4, 5])
        expect(lodash.drop(testArray, 3)).toBe([4, 5])
        expect(lodash.drop(testArray, 4)).toBe([5])
        expect(lodash.drop(testArray, 5)).toBe([])
        expect(lodash.drop(testArray, 100)).toBe([])
    })
})

describe('Lodash: dropWhile', () => {
    let testArray;

    beforeEach(() => {
        testArray = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false },
            { 'user': 'pebbles', 'active': true }
        ]
    })

    test('should be defined', () => {
        expect(lodash.dropWhile).toBeDefined()
        expect(lodash.dropWhile).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.dropWhile(testArray, () => true)).toBeInstanceOf(Array)
    })

    test('should drop all while true', () => {
        expect(lodash.dropWhile(testArray, () => true)).toBe([])
    })

    test('should drop according to callback', () => {
        expect(lodash.dropWhile(testArray, (obj) => obj.active)).toBe(testArray)
        expect(lodash.dropWhile(testArray, (obj) => !obj.active)).toBe([
            { 'user': 'pebbles', 'active': true }
        ])
    })
})

describe('Lodash: take', () => {
    let testArray;

    beforeEach(() => {
        testArray = [1, 2, 3, 4, 5, 6, 7]
    })

    test('should be defined', () => {
        expect(lodash.take).toBeDefined()
        expect(lodash.take).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.take(testArray, 0)).toBeInstanceOf(Array)
    })

    test('should  slice of array with elements taken from the beginning', () => {
        expect(lodash.take(testArray, 0)).toBe([])
        expect(lodash.take(testArray, 1)).toBe([1])
        expect(lodash.take(testArray, 2)).toBe([1, 2])
        expect(lodash.take(testArray, 3)).toBe([1, 2, 3])
        expect(lodash.take(testArray, 4)).toBe([1, 2, 3, 4])
        expect(lodash.take(testArray, 10)).toBe([1, 2, 3, 4, 5, 6, 7])
    })
})

describe('Lodash: filter', () => {
    let testArray;

    beforeEach(() => {
        testArray = [1, 2, 3, 4, 5, 6]
    })

    test('should be defined', () => {
        expect(lodash.filter).toBeDefined()
        expect(lodash.filter).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.filter(testArray)).toBeInstanceOf(Array)
    })

    test('should not mutate given array', () => {
        expect(lodash.filter(testArray, (a) => a > 5)).not.toBe(testArray)
    })

    test('should filter values according to callback', () => {
        expect(lodash.filter(testArray, (a) => a > 2)).toBe([3, 4, 5, 6])
        expect(lodash.filter(testArray, (a) => a > 4)).toBe([5, 6])
        expect(lodash.filter(testArray, (a) => a > 5)).toBe([6])
    })
})
