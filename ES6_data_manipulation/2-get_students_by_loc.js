export default function getStudentsByLocation(list_of_students, city){
    return list_of_students.filter((obj) => obj['location'] === city)
}