import getListStudents from "./0-get_list_students.js";

export default function getListStudentIds(array_obj){
    if (typeof array_obj != 'object' || array_obj == null){
        return []
    }
    else{
        return array_obj.map((obj) => obj['id'])
    }
}

console.log(getListStudentIds(null));