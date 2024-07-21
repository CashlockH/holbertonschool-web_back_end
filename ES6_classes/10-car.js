class Car{
    constructor(brand, motor, color){
        this._brand = brand,
        this._motor = motor,
        this._color = color
    }
    cloneCar(){
        const obj = new this.constructor()
        return obj
    }
}