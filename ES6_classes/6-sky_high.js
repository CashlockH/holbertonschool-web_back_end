import Building from './5-building'

export default class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        super()
        this._sqft = sqft
        this._floors = floors
    }

    get sqft(){
        return this._sqft
    }

    get floors(){
        return this._floors
    }

    evacuationWarningMessage(){
        return "Evacuate slowly the NUMBER_OF_FLOORS floors"
    }
}