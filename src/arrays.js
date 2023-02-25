class LodashArray {
    /**
     * Creates an array of elements, split into groups the length of size.
     * If array can't be split evenly, the final chunk will be the
     * remaining elements.
     *
     * @param {Array} array
     * @param {Number} size
     * @return {Array}
     *
     * complexity = O(Math.ceil(array.length / size) * size)
     */
    chunk(array, size) {
        let result = [];
        for (let i = 0;  i < array.length; i = i + size) {
            let innerArray = [];
            for (let j = 0; j < size; j++) {
                if (!array[i + j]) {
                    break
                }
                innerArray[j] = array[i + j]
            }
            result[i / size] = innerArray;
        }
        return result;
    }

    /**
     * Creates an array with all falsey values removed.
     * The values false, null, 0, "", undefined, and NaN are falsey.
     *
     * @param {Array} array
     * @return {Array}
     *
     * complexity = O(array.length)
     */
    compact(array) {
        let result = [];
        for (let i of array) {
            if (i) {
                result[result.length] = i;
            }
        }
        return result;
    }

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     *
     * @param {Array} [array]
     * @param {Number} n
     * @return {Array}
     *
     * complexity = O(array.length)
     */
    drop(array, n = 1) {
        if (!n) {
            return array
        }
        if (!array) {
            return [];
        }
        let result = [];
        for (let i = n; i < array.length; i++) {
            result[result.length] = array[i]
        }
        return result;
    }

    /**
     * Creates a slice of array excluding elements dropped from the beginning.
     * Elements are dropped until predicate returns falsey.
     *
     * @param {Array} array
     * @param {Function} func
     * @return {Array}
     *
     * complexity = O(array.length)
     */
    dropWhile(array, func) {
        const result = []
        let index = array.length - 1
        for (let i in array) {
            if (!func(array[i])) {
                index = i
                break
            }
        }
        for (let i = index; i < array.length; i++) {
            result[result.length] = array[i]
        }
        return result
    }

    /**
     * Creates a slice of array with n elements taken from the beginning.
     *
     * @param {Array} array
     * @param {Number} n
     * @return {Array}
     *
     * complexity = O(array.length)
     */
    take(array, n = 1) {
        let result = []

        for (let i = 0; i < n && i < array.length; i++) {
            result[result.length] = array[i]
        }

        return result
    }

    /**
     * Iterates over elements of collection, returning an array of
     * all elements predicate returns truthy for.
     *
     * @param {Array, Object} collection
     * @param {Function} [func]
     * @return {Array}
     *
     * complexity = O(array.length)
     */
    filter(collection, func) {
        let result = []
        if (!func) {
            func = (v) => v
        }
        for (let i in collection) {
            if (func(collection[i])) {
                result[result.length] = collection[i]
            }
        }

        return result
    }

    /**
     * Iterates over elements of collection, returning the
     * first element predicate returns truthy for.
     *
     * @param {Array, Object} collection
     * @param {Function} [func]
     * @param {Number} [n]
     * @return {Array}
     *
     * complexity = O(2 * array.length)
     */
    find(collection, func, n = 0) {
        if (!func) {
            return collection[0]
        }

        let result
        let array = []

        for (let i in collection) {
            array[array.length] = collection[i]
        }

        for (let i = n; i < array.length; i++) {
            if (func(array[i])) {
                result = array[i]
                break
            }
        }

        return result
    }

    /**
     * Checks if value is in collection. If collection is a string,
     * it's checked for a substring of value, otherwise SameValueZero
     * is used for equality comparisons.
     *
     * If fromIndex is negative,
     * it's used as the offset from the end of collection.
     *
     * @param {String, Array, Object} collection
     * @param {*} [value]
     * @param {Number} [fromIndex]
     * @return {Boolean}
     *
     * complexity = O(array.length ** value.length)
     */
    includes(collection, value, fromIndex = 0) {
        function includesSub(source) {
            if (value.length > collection.length) {
                return false
            }
            if (value === '') {
                return true
            }

            let ans = false;
            let x = 0;
            for (let i = fromIndex; i < source.length; i++) {
                if (source[i] === value[0]) {
                    for (let n = 0; n < value.length; n++) {
                        if (source[i + n] === value[n]) x++
                        if (x === value.length) ans = true
                    }
                }
            }
            return ans;
        }

        function includesArray(source) {
            const padding = fromIndex < 0 ? source.length : 0
            for (let i = fromIndex + padding; i < source.length; i++) {
                if (source[i] === value) return true
            }
            return false
        }

        if (typeof collection === 'string') {
            return includesSub(collection)
        }

        if (!(collection instanceof Array)) {
            const array = []
            for (let i in collection) {
                array[array.length] = collection[i]
            }
            return includesArray(array)
        }

        return includesArray(collection)
    }

    /**
     * Creates an array of values by running each element in collection
     * through function.
     *
     * @param {Array, Object, String} collection
     * @param {Function} func
     *
     * @return {Array}
     *
     * complexity = O(collection.length)
     */
    map(collection, func) {
        let answer = [];
        for (let i in collection) {
            answer[answer.length] = func(collection[i])
        }
        return answer;
    }

    /**
     * Creates an array of grouped elements, the first of which contains
     * the first elements of the given arrays, the second of which
     * contains the second elements of the given arrays, and so on.
     *
     * @param {Array} arrays
     *
     * @return {Array}
     *
     * complexity = O(arrays.length * max(array.length))
     */

    zip(...arrays) {
        let length = 0;
        for (let i of arrays) {
            length = Math.max(length, i.length)
        }

        let answer = []
        for (let i = 0; i < length; i++) {
            answer[answer.length] = []
        }

        for (let i = 0; i < arrays.length; i++) {
            for (let j = 0; j < length; j++) {
                if (arrays[i][j] === undefined) {
                    answer[j][answer[j].length] = null
                } else {
                    answer[j][answer[j].length] = arrays[i][j]
                }
            }
        }

        return answer
    }
}

module.exports = LodashArray
