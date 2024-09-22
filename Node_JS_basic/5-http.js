const http = require('node:http');
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
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const student = await countStudents(args[0]);
      res.end(student);
    } catch (error) {
      res.statusCode = 500;
    }
  }
});
app.listen(1245, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});
module.exports = app;
