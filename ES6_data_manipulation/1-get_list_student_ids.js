export default function getListStudentIds(array_obj){
    console.log(typeof array_obj)
    if (typeof array_obj != 'object'){
        return []
    }
    else{
        return array_obj.map((obj) => obj['id'])
    }
}