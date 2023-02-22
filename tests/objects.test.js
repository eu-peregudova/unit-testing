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
// omitBy
// pick
// pickBy
// toPairs
