export default function cleanSet(set_obj, startString){
    let text = ""
    for (const element of set_obj)
    {
        if (startString && element.startsWith(startString))
        {
            if (text)
                text = text.concat("-", element.slice(startString.length))
            else
                text = text.concat("", element.slice(startString.length))
        }
    }
    return text
}