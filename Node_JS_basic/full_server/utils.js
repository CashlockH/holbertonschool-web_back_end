const fs = require('fs').promises;
const path = require('path');

async function readDatabase(filePath) {
    const fullPath = path.join(__dirname, '../', filePath);
    const data = await fs.readFile(fullPath, 'utf8');
    const lines = data.split('\n');
    
    let cs_count = 0;
    let cs_list = [];
    let swe_count = 0;
    let swe_list = [];

    lines.forEach(element => {
        if (element.search(/CS/) >= 0) {
            cs_count++;
            const name = element.split(',');
            cs_list.push(` ${name[0]}`);
        } else if (element.search(/SWE/) >= 0) {
            swe_count++;
            const name = element.split(',');
            swe_list.push(` ${name[0]}`);
        }
    });

    const result = `This is the list of our students\nNumber of students in CS: ${cs_count}. List:${cs_list}\nNumber of students in SWE: ${swe_count}. List:${swe_list}`;
    
    return result;
}

module.exports = { readDatabase };
