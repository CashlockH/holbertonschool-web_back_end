const fs = require('fs').promises;

async function readDatabase(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n');
        
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
        result = `Number of students: ${lines.length - 2}\nNumber of students in CS: ${cs_count}. List:${cs_list}\nNumber of students in SWE: ${swe_count}. List:${swe_list}`

        return result;
    } catch (error) {
        return Promise.reject(error);
    }
}
