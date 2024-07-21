export default class HolbertonCourse{
    constructor(name, length, students){
        this._name = name,
        this._length = length,
        this._students = students
    }

    /**
     * @param {string} a
     */
    set name(x){
        if (typeof x !== 'string'){
            throw new TypeError("Name must be a string")
        }
        this._name = x
    }
    get name(){
        return this._name
    }
    /**
     * @param {number} x
     */
    set length(x){
        if (typeof x !== "number"){
            throw new TypeError("Length must be a number")
        }
        this._length = x
    }
    get length(){
        return this._length
    }
    /**
     * @param {array} x
     */
    set students(x){
        if (!Array.isArray(x)){
            throw TypeError("Students must be an array of strings")
        }
        this._students = x
    }
    get students(){
        return this._students
    }
}
