class LodashArray {
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
        // complexity = O(Math.ceil(n / m) * m)
    }
    compact() {

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
