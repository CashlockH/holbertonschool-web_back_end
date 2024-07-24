export default function cleanSet(set_obj, startString){
    let text = ""
    if (startString && typeof startString == "string"){
        for (const element of set_obj)
        {
            if (element.startsWith(startString))
            {
                if (text)
                    text = text.concat("-", element.slice(startString.length))
                else
                    text = text.concat("", element.slice(startString.length))
            }
        }
    }
    return text
}
