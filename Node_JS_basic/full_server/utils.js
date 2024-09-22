const fs = require('fs').promises;

async function readDatabase(path) {
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

  const result = `This is the list of our students\nNumber of students in CS: ${cscount}. List:${cslist}\nNumber of students in SWE: ${swecount}. List:${swelist}`;

  return result;
}

module.exports = { readDatabase };
