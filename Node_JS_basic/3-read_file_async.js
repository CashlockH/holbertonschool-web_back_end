const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    console.log(`Number of students: ${lines.length - 2}`);
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
    console.log(`Number of students in CS: ${cscount}. List:${cslist}`);
    console.log(`Number of students in SWE: ${swecount}. List:${swelist}`);

    return Promise.resolve();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
