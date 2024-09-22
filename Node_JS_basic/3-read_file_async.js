const fs = require('node:fs');
function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        console.log(`Number of students: ${lines.length - 1}`);
        let cs_count = 0
        let cs_list = []
        let swe_count = 0
        let swe_list = []
        lines.forEach(element => {
            if (element.search(/CS/) >= 0){
                cs_count = cs_count + 1
                const name = element.split(',')
                cs_list.push(` ${name[0]}`)
            }
            else if (element.search(/SWE/) >= 0){
                swe_count = swe_count + 1
                const name = element.split(',')
                swe_list.push(` ${name[0]}`)
            }
        });
        console.log(`Number of students in CS: ${cs_count}. List:${cs_list}`)
        console.log(`Number of students in SWE: ${swe_count}. List:${swe_list}`)
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents