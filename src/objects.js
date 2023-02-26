LodashArray = require('../src/arrays.js')
let _ = new LodashArray

class LodashObject {
    merge() {

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

    pickBy() {

    }

    toPairs() {

    }
}

module.exports = LodashObject
