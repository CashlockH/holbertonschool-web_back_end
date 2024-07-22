export default function getStudentIdsSum(list_of_students){
    const initialValue = 0
    return list_of_students.reduce((accumulator, currentValue) => accumulator + currentValue['id'], initialValue)
}