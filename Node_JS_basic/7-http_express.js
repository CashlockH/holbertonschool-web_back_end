const express = require('express');

const app = express();
const fs = require('fs').promises;

const args = process.argv.slice(2);
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    let cscount = 0;
    const cslist = [];
    let swecount = 0;
    const swelist = [];
    lines.forEach((element) => {
      if (element.search(/CS/) >= 0) {
        cscount += 1;
        const name = element.split(',');
        cslist.push(` ${name[0]}`);
      } else if (element.search(/SWE/) >= 0) {
        swecount += 1;
        const name = element.split(',');
        swelist.push(` ${name[0]}`);
      }
    });
    const result = `This is the list of our students\nNumber of students: ${lines.length - 2}\nNumber of students in CS: ${cscount}. List:${cslist}\nNumber of students in SWE: ${swecount}. List:${swelist}`;

    return result;
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
    res.statusCode = 500;
  }
});
const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
module.exports = app;
