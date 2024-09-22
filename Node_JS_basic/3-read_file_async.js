import { promises as fs } from 'fs';

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n');
        console.log(`Number of students: ${lines.length - 2}`);
        
        let cs_count = 0;
        let cs_list = [];
        let swe_count = 0;
        let swe_list = [];

        lines.forEach(element => {
            if (element.includes('CS')) {
                cs_count++;
                const name = element.split(',');
                cs_list.push(name[0].trim());
            } else if (element.includes('SWE')) {
                swe_count++;
                const name = element.split(',');
                swe_list.push(name[0].trim());
            }
        });

        console.log(`Number of students in CS: ${cs_count}. List: ${cs_list.join(', ')}`);
        console.log(`Number of students in SWE: ${swe_count}. List: ${swe_list.join(', ')}`);
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents