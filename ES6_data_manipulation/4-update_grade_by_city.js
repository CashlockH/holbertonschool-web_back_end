export default function updateStudentGradeByCity(list_of_students, city, newGrades){
    return list_of_students
    .filter((obj) => obj['location'] === city)
    .map((obj) => {
        obj['grade'] = NaN
        for (const element of newGrades){
            if (element['studentId'] == obj['id']){
                if (element['grade'])
                    obj['grade'] = element['grade']
            }
        }
        return obj
    }
    )
}