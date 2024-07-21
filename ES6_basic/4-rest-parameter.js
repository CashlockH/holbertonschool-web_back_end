export default function returnHowManyArguments(...args) {
    var i = 0;
    for (let arg of args){
        i++
    }
    return i
}