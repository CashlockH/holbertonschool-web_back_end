function hasValuesFromArray(set_obj, array_obj){
    for (element of array_obj)
    {
        True = 0
        if (set_obj.has(element))
            True = 1
    }
    if (True == 1)
        return true
    return false
}