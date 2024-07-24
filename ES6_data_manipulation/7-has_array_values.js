function hasValuesFromArray(set_obj, array_obj){
    let True
    for (const element of array_obj)
    {
        True = 0
        if (set_obj.has(element))
            True = 1
    }
    if (True == 1)
        return true
    return false
}

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));