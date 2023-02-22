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
    drop() {

    }
    dropWhile() {

    }
    take() {

    }
    filter() {
//collection
    }
    find() {
//collection
    }
    includes() {
//collection
    }
    map() {
//collection
    }
    zip() {

    }
}

module.exports = LodashArray
