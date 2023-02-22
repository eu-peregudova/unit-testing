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
// pick
// pickBy
// toPairs
