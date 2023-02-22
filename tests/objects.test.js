LodashObject = require('../src/objects')

let lodash = new LodashObject;

// merge
describe('Lodash: merge', () => {
    test('should be defined', () => {
        expect(lodash.merge).toBeDefined()
        expect(lodash.merge).not.toBeUndefined()
    })

    test('should return object', () => {
        expect(lodash.merge('a')).toBeInstanceOf(Object)
    })

    test('should mutate original object', () => {
        const object = {
            'a': [{ 'b': 2 }, { 'd': 4 }]
        }
        const source = {
            'a': [{ 'c': 3 }, { 'e': 5 }]
        }
        lodash.merge(object, source)
        expect(object).toBe({
            'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }]
        })
    })

    test('should merge objects correctly, override primitives', () => {
        let object, source;

        object = {'a': 1}
        source = {'a': 0}
        expect(lodash.merge(object, source)).toBe({'a': 0})

        object = {'a': [1, 2, 3]}
        source = {'a': 'b'}
        expect(lodash.merge(object, source)).toBe({'a': 'b'})

        object = {'a': [1, 2, 3]};
        source = {'a': [4, 5]};
        expect(lodash.merge(object, source)).toBe({'a': [4, 5, 3]})

        object = {'a': {'b': [1, 2, 3]}}
        source = {'a': {'c': [4, 5]}}
        expect(lodash.merge(object, source)).toBe({
            "a": {"b": [1, 2, 3], "c": [4, 5]}
        })
    })
})

// omit
describe('Lodash: omit', () => {
    test('should be defined', () => {
        expect(lodash.omit).toBeDefined()
        expect(lodash.omit).not.toBeUndefined()
    })

    test('should return object', () => {
        expect(lodash.omit({'a': 1, 'b': '2', 'c': 3}, ['a', 'c'])).toBeInstanceOf(Object)
    })

    test('should omit provided properties from object', () => {
        expect(lodash.omit({'a': 1, 'b': '2', 'c': 3}, ['a', 'c'])).toBe({'b': '2'})
        expect(lodash.omit({'a': 2, 'b': [1, 2, 3]}, 'b')).toBe({'a': 2})
        expect(lodash.omit({'a': 2, 'b': [1, 2, 3]}, 'none')).toBe({'a': 2, 'b': [1, 2, 3]})

    })

    test('should not omit nested properties', () => {
        expect(lodash.omit({'a': {'b': [1, 2, 3]}}, ['b'])).toBe({'a': {'b': [1, 2, 3]}})
    })
})

// omitBy
describe('Lodash: omitBy', () => {
    test('should be defined', () => {
        expect(lodash.omitBy).toBeDefined()
        expect(lodash.omitBy).not.toBeUndefined()
    })

    test('should return object', () => {
        expect(lodash.omitBy({a: 1}, (a) => a)).toBeInstanceOf(Object)
        expect(lodash.omitBy()).toBeInstanceOf(Object)
    })

    test('should leave values for which callback doesn\'t return truthy', () => {
        expect(lodash.omitBy({'a': 1, 'b': '2', 'c': 3}, (a) => typeof(a) === 'number'))
            .toBe({'b': '2'})
        expect(lodash.omitBy({'a': 1, 'b': '2', 'c': 3}, (a) => typeof(a) === 'string'))
            .toBe({'a': 1, 'c': 3})
        expect(lodash.omitBy({'a': 1, 'b': 2, 'c': 3}, (a) => a > 2))
            .toBe({'a': 1, 'b': 2})
        expect(lodash.omitBy({'a': 1, 'b': 2, 'c': 3}, (a) => a < 0))
            .toBe({'a': 1, 'b': 2, 'c': 3})
        expect(lodash.omitBy({'a': 1, 'b': 2, 'c': 3}, (a) => a > 0))
            .toBe({})
    })
})

// pick
describe('Lodash: pick', () => {
    test('should be defined', () => {
        expect(lodash.pick).toBeDefined()
        expect(lodash.pick).not.toBeUndefined()
    })

    test('should return object', () => {
        expect(lodash.pick()).toBeInstanceOf(Object)
        expect(lodash.pick({'a': 1}, 'a')).toBeInstanceOf(Object)
    })

    test('should create new object composed of the picked object properties', () => {
        expect(lodash.pick({'a': 1, 'b': '2', 'c': 3}, ['a', 'b']))
            .toBe({'a': 1, 'b': '2'})
        expect(lodash.pick({'a': 1, 'b': '2', 'c': 3}, ['a', 'c']))
            .toBe({'a': 1, 'c': 3})
        expect(lodash.pick({'a': 1, 'b': 2, 'c': 3}, []))
            .toBe({})
        expect(lodash.pick({'a': 1, 'b': 2, 'c': 3}, ['n']))
            .toBe({})
        expect(lodash.pick({'a': 1, 'b': 2, 'c': 3}, 'a'))
            .toBe({'a': 1})
    })
})

// pickBy
describe('Lodash: pickBy', () => {
    test('should be defined', () => {
        expect(lodash.pickBy).toBeDefined()
        expect(lodash.pickBy).not.toBeUndefined()
    })

    test('should return an object', () => {
        expect(lodash.pickBy()).toBeInstanceOf(Object)
        expect(lodash.pickBy({'a': 1}, (a) => a)).toBeInstanceOf(Object)
    })

    test('should create an object composed of the properties callback returns truthy for', () => {
        expect(lodash.pickBy({'a': 1, 'b': '2', 'c': 3}, (a) => typeof a === 'number'))
            .toBe({'a': 1, 'c': 3})
        expect(lodash.pickBy({'a': 1, 'b': '2', 'c': 3}, (a) => typeof a !== 'number'))
            .toBe({'b': '2'})
        expect(lodash.pickBy({'a': 1, 'b': 2, 'c': 3}, (a) => a > 2))
            .toBe({'c': 3})
        expect(lodash.pickBy({'a': 1, 'b': '2', 'c': 3}, (a) => a < 0))
            .toBe({})
    })
})

// toPairs
describe('Lodash: toPairs', () => {
    test('should be defined', () => {
        expect(lodash.toPairs).toBeDefined()
        expect(lodash.toPairs).not.toBeUndefined()
    })

    test('should return an array', () => {
        expect(lodash.toPairs({'a': 1})).toBeInstanceOf(Array)
        expect(lodash.toPairs()).toBeInstanceOf(Array)
    })

    test('should not deconstruct nested objects', () => {
        expect(lodash.toPairs({'a': 1, 'b': {'c': 2}}))
            .toBe([['a', 1],['b', {'c': 2}]])
    })

    test('should create an array of arrays with [key, value] pairs, ' +
        'If object is a map or set, its entries are returned.', () => {
        expect(lodash.toPairs({'a': 1, 'b': 2}))
            .toBe([['a', 1], ['b', 2]])

        let test = new Set([1, 2, 3])
        expect(lodash.toPairs(test))
            .toBe([[1, 1], [2, 2], [3, 3]])

        test = new Map()
        test.set('a', 1)
        expect(lodash.toPairs(test))
            .toBe([['a', 1]])

        test.set({'b': 2}, 3)
        expect(lodash.toPairs(test))
            .toBe([['a', 1], [{'b': 2}, 3]])

        test = [1, 2, 3]
        expect(lodash.toPairs(test))
            .toBe([['0', 1], ['1', 2], ['2', 3]])
    })
})
