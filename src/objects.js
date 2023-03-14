LodashArray = require('../src/arrays.js')
let _ = new LodashArray


class LodashObject {
    /**
     * This method is recursively merges own and inherited
     * enumerable string keyed properties
     * of source objects into the destination object.
     *
     * Source properties that resolve to undefined are skipped
     * if a destination value exists.
     *
     * Array and plain object properties are merged recursively.
     * Other objects and value types are overridden by assignment.
     * Source objects are applied from left to right.
     *
     * Subsequent sources overwrite property assignments
     * of previous sources.
     *
     * This method mutates object.
     *
     * @param {Object} destObject
     * @param {Object} sources
     *
     * @return {Object}
     */
    merge(destObject, ...sources) {
        const replace = (val, newVal) => {
            if (val instanceof Array && newVal instanceof Array) {
                let ans = val
                for (let j = 0; j < newVal.length; j++) {
                    ans[j] = replace(val[j], newVal[j])
                }
                return ans
            } else if (val instanceof Object && newVal instanceof Object) {
                return this.merge(val, newVal)
            }
            return newVal
        }

        for (let source of sources) {
            for (let i in source) {
                if (source[i] == null)
                    continue
                destObject[i] = replace(destObject[i], source[i])
            }
        }

        return destObject

    }

    /**
     * The opposite of _.pick; this method creates an object composed of the own
     * and inherited enumerable property paths of object that are not omitted.
     *
     *  @param {Object} object
     *  @param {String, Array} paths
     *
     *  @return {Object}
     */
    omit(object, paths) {
        if (typeof paths === 'string') {
            const a = paths
            paths = []
            paths[0] = a
        }
        let result = {}
        for (let key in object) {
            if (!_.includes(paths, key)) {
                result[key] = object[key]
            }
        }
        return result
    }

    /**
     * The opposite of _.pick; this method creates an object composed
     * of the own and inherited enumerable string keyed properties of
     * object that predicate doesn't return truthy for.
     *
     *  @param {Object} object
     *  @param {Function} func
     *
     *  @return {Object}
     */
    omitBy(object, func) {
        let result = {}
        for (let key in object) {
            if (!func(object[key])) {
                result[key] = object[key]
            }
        }
        return result
    }

    /**
     * Creates an object composed of the picked object properties.
     *
     *  @param {Object} object
     *  @param {String, Array} paths
     *
     *  @return {Object}
     */
    pick(object, paths) {
        if (typeof paths === 'string') {
            const a = paths
            paths = []
            paths[0] = a
        }
        let result = {}
        for (let key in object) {
            if (_.includes(paths, key)) {
                result[key] = object[key]
            }
        }
        return result
    }

    /**
     * Creates an object composed of the
     * object properties function returns truthy for.
     *
     *  @param {Object} object
     *  @param {Function} func
     *
     *  @return {Object}
     */
    pickBy(object, func) {
        let result = {}
        for (let key in object) {
            if (func(object[key])) {
                result[key] = object[key]
            }
        }
        return result
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for object.
     * If object is a map or set, its entries are returned.
     *
     * @param {Object} object
     *
     * @return {Array}
     */

    toPairs(object) {
        let obj = []
        let result = []

        if (!object) {
            return result
        }

        if (object instanceof Set) {
            for (let i of object) {
                let a = []
                a[0] = i
                a[1] = i
                result[result.length] = a
            }
        } else if (object instanceof Map) {
            for (let i of object) {
                result[result.length] = i
            }
        } else {
            obj = JSON.parse(JSON.stringify(object))
        }

        for (let key in obj) {
            let a = []
            a[0] = key
            a[1] = obj[key]

            result[result.length] = a
        }

        return result
    }
}

module.exports = LodashObject
