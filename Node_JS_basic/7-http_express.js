const express = require('express');
const app = express();
const fs = require('fs').promises;
const args = process.argv.slice(2);
async function countStudents(path) {
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
        result = `This is the list of our students\nNumber of students: ${lines.length - 2}\nNumber of students in CS: ${cs_count}. List:${cs_list}\nNumber of students in SWE: ${swe_count}. List:${swe_list}`

        return result
    } catch (error) {
        return 'This is the list of our students\nCannot load the database';
    }
}
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    try {
            const student = await countStudents(args[0]);
            res.end(student);
    } catch (error) {
        res.statusCode = 500
    }
})
port = 1245
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
module.exports = app;