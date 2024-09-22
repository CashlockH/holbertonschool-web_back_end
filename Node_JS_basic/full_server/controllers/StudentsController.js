const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
            const students = await readDatabase('database.csv');
            res.status(200).send(students);
    }
}

module.exports = StudentsController;