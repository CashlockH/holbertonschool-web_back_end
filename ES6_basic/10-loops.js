export default function appendToEachArrayValue(array, appendString) {
    for (let [idx, element] of array.entries()) {
        let old = array[idx]
        array[idx] = appendString + old;
    }
  
    return array;
}