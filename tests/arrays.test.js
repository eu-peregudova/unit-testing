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
        expect(lodash.chunk(testArray, 2)).toStrictEqual([['a', 'b'], [1, 2], [6, true]])
        expect(lodash.chunk(testArray, 3)).toStrictEqual([['a', 'b', 1], [2, 6, true]])
        expect(lodash.chunk(testArray, 4)).toStrictEqual([['a', 'b', 1, 2], [6, true]])
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
        expect(lodash.compact(testArray)).toStrictEqual(result)
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
        expect(lodash.drop([1,2])).toBeInstanceOf(Array)
    })

    test('default number of dropped elements is 1', () => {
        expect(lodash.drop(testArray)).toStrictEqual([2, 3, 4, 5])
        expect(lodash.drop(testArray)).toStrictEqual(lodash.drop(testArray, 1))
    })

    test('should return as is if number of dropped elements is 0', () => {
        expect(lodash.drop(testArray, 0)).toStrictEqual([1, 2, 3, 4, 5])
        expect(lodash.drop(testArray, 0)).toBe(testArray)
    })

    test('should creates a slice of array with n elements dropped from the beginning', () => {
        expect(lodash.drop(testArray, 2)).toStrictEqual([3, 4, 5])
        expect(lodash.drop(testArray, 3)).toStrictEqual([4, 5])
        expect(lodash.drop(testArray, 4)).toStrictEqual([5])
        expect(lodash.drop(testArray, 5)).toStrictEqual([])
        expect(lodash.drop(testArray, 100)).toStrictEqual([])
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

    test('should drop according to callback', () => {
        expect(lodash.dropWhile(testArray, (obj) => obj.active)).toStrictEqual(testArray)
        expect(lodash.dropWhile(testArray, (obj) => !obj.active)).toStrictEqual([
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
        expect(lodash.take(testArray, 0)).toStrictEqual([])
        expect(lodash.take(testArray, 1)).toStrictEqual([1])
        expect(lodash.take(testArray, 2)).toStrictEqual([1, 2])
        expect(lodash.take(testArray, 3)).toStrictEqual([1, 2, 3])
        expect(lodash.take(testArray, 4)).toStrictEqual([1, 2, 3, 4])
        expect(lodash.take(testArray, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
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
        expect(lodash.filter(testArray, (a) => a > 2)).toStrictEqual([3, 4, 5, 6])
        expect(lodash.filter(testArray, (a) => a > 4)).toStrictEqual([5, 6])
        expect(lodash.filter(testArray, (a) => a > 5)).toStrictEqual([6])
    })

    test('should work with objects', () => {
        let obj = {a: 1, b: 2, c: 3, d: 4}

        expect(lodash.filter(obj, (a) => a > 1))
            .toStrictEqual([2, 3, 4])
        expect(lodash.filter(obj, (a) => a > 3))
            .toStrictEqual([4])
    })
})

describe('Lodash: find', () => {
    let testArray;

    beforeEach(() => {
        testArray = [
            { 'user': 'barney',  'age': 36, 'active': true },
            { 'user': 'fred',    'age': 40, 'active': false },
            { 'user': 'pebbles', 'age': 1,  'active': true }
        ]
    })

    test('should be defined', () => {
        expect(lodash.find).toBeDefined()
        expect(lodash.find).not.toBeUndefined()
    })

    test('should return undefined if nothing is found', () => {
        expect(lodash.find([1, 2, 4], (a) => a === 5)).toBeUndefined()
    })

    test('should return only first find', () => {
        expect(lodash.find([1, 2, 4], (a) => a > 0)).toBe(1)
    })

    test('should accept third parameter (index to search from)', () => {
        expect(lodash.find([1, 2, 4], (a) => a > 0, 1)).toBe(2)
    })

    test('should work with arrays of objects', () => {
        expect(lodash.find(testArray, (o) => o.age < 40)).toBe(testArray[0])
        expect(lodash.find(testArray, (o) => o.active, 1)).toBe(testArray[2])
        expect(lodash.find(testArray, (o) => !o.active)).toBe(testArray[1])
    })

    test('should work with strings', () => {
        expect(lodash.find('abcde', (a) => a === 'a')).toBe('a')
    })

    test('should work with objects', () => {
        let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}
        expect(lodash.find(obj, (v) => v > 1)).toStrictEqual(2)
        expect(lodash.find(obj, (v) => v > 1, 3)).toStrictEqual(4)
        expect(lodash.find(obj, (v) => v > 1, 2)).toStrictEqual(3)
    })
})

describe('Lodash: includes', () => {
    test('should be defined', () => {
        expect(lodash.includes).toBeDefined()
        expect(lodash.includes).not.toBeUndefined()
    })

    test('should return Boolean', () => {
        expect(typeof lodash.includes([1, 2, 3], 1) === 'boolean').toBeTruthy()
        expect(typeof lodash.includes([1, 2, 3], 5) === 'boolean').toBeTruthy()
    })

    test('should accept third parameter (index to search from)', () => {
        expect(lodash.includes([1, 2, 3], 3, 1)).toBe(true)
        expect(lodash.includes([1, 2, 3], 1, 1)).toBe(false)
    })

    test('should work with arrays', () => {
        expect(lodash.includes([1, 2, 3, 4, 5], 3)).toBe(true)
        expect(lodash.includes([1, 2, 3, 4, 5], 7)).toBe(false)
        expect(lodash.includes([1, 'a', 'b', 3, 1], 'a')).toBe(true)
        expect(lodash.includes(['12345'], 3)).toBe(false)
    })

    test('should work with strings', () => {
        expect(lodash.includes('abcde', 'bc')).toBe(true)
        expect(lodash.includes('hello', 'bc')).toBe(false)
        expect(lodash.includes('hello', 'llo')).toBe(true)
        expect(lodash.includes('abcde', '')).toBe(true)
    })

    test('should work with objects', () => {
        expect(lodash.includes({ 'a': 1, 'b': 2 }, 1)).toBe(true)
        expect(lodash.includes({ 'a': 1, 'b': 2 }, 'a')).toBe(false)
        expect(lodash.includes({ 'a': 1, 'b': 2 })).toBe(false)
    })
})

describe('Lodash: map', () => {
    let testArray;

    beforeEach(() => {
        testArray = [1, 2, 3, 4, 5, 6, 7]
    })

    test('should be defined', () => {
        expect(lodash.map).toBeDefined()
        expect(lodash.map).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.map([1, 2, 3], (a) => a)).toBeInstanceOf(Array)
    })

    test('should run callback to all values in array', () => {
        expect(lodash.map(testArray, (num) => num * 2)).toStrictEqual(testArray.map((num) => num * 2))
        expect(lodash.map(testArray, (num) => Math.sqrt(num))).toStrictEqual(testArray.map((num) => Math.sqrt(num)))
        expect(lodash.map(testArray, (num) => num ** 3)).toStrictEqual(testArray.map((num) => num ** 3))
    })

    test('should work with an array of objects', () => {
        const arr = [{ 'a': 20 }, { 'b': 40 }]
        expect(lodash.map(arr, (u) => u / 10)).toStrictEqual([2, 4])
    })

    test('should work with strings', () => {
        const string = 'abc'
        expect(lodash.map(string, (a) => `${a}b`)).toStrictEqual(['ab', 'bb', 'cb'])
    })

    test('should work with objects', () => {
        const object = {a: 1, b: 2, c: 3}
        expect(lodash.map(object, (a) => a ** 2)).toStrictEqual([1, 4, 9])
        expect(lodash.map(object, (a) => a + '1')).toStrictEqual(['11', '21', '31'])
    })
})

describe('Lodash: zip', () => {
    test('should be defined', () => {
        expect(lodash.zip).toBeDefined()
        expect(lodash.zip).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.zip([1], ['a'])).toBeInstanceOf(Array)
    })

    test('should group objects', () => {
        expect(lodash.zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]])
        expect(lodash.zip(['a', 'b', 'c'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false], ['c']])
    })
})
