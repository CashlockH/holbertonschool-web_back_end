export default function cleanSet(set_obj, startString){
    text = ""
    for (element of set_obj)
    {
        if (element.startsWith(startString) && startString)
        {
            if (text)
                text = text.concat("-", element.slice(startString.length))
            else
                text = text.concat("", element.slice(startString.length))
        }
    }
    return text
}