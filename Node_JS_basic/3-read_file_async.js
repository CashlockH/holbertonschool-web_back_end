import { promises as fs } from 'fs';

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        console.log(`Number of students: ${lines.length}`);

        let cs_count = 0;
        let cs_list = [];
        let swe_count = 0;
        let swe_list = [];

        lines.forEach(line => {
            const parts = line.split(',');
            if (parts.length < 2) return;

            const name = parts[0].trim();
            const field = parts[1].trim();

            if (field === 'CS') {
                cs_count++;
                cs_list.push(name);
            } else if (field === 'SWE') {
                swe_count++;
                swe_list.push(name);
            }
        });

        console.log(`Number of students in CS: ${cs_count}. List: ${cs_list.join(', ')}`);
        console.log(`Number of students in SWE: ${swe_count}. List: ${swe_list.join(', ')}`);
        
        return Promise.resolve();
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents
