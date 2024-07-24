export default function guardrail(mathFunction){
    let queue = new Array()
    try{
        let result = mathFunction()
        queue.push(result)
    }
    catch(err){
        queue.push(`Error: ${err.message}`)
    }
    queue.push("Guardrail was processed")
    return queue
}