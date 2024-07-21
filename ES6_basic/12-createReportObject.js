export default function createReportObject(employeesList) {
    const obj = {
        allEmployees: {...employeesList},
        getNumberOfDepartments(employeesList){
            let idx = 0
            for (let employee in employeesList)
                idx++
            return idx
        } 
    }
    return obj
}