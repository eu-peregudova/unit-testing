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
                console.log(paths)
                console.log(key, _.includes(paths, key))
                result[key] = object[key]
            }
        }
        return result
    }

    omitBy() {

    }

    pick() {

    }

    pickBy() {

    }

    toPairs() {

    }
}

module.exports = LodashObject
