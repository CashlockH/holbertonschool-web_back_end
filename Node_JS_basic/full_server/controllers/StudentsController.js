const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res, dbFileName) {
    try {
      const students = await readDatabase(dbFileName);
      res.status(200).send(students);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res, dbFileName) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(dbFileName);
      const namelist = [];
      const line = students.split('\n');
      for (let index = 0; index < line.length; index += 1) {
        if (line[index].search(major) >= 0) namelist.push(line[index].split('List: ')[1]);
      }

      const response = `List: ${namelist[0]}`;
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
