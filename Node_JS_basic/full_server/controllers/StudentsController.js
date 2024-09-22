const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res, dbFileName) {
        try {
            const students = await readDatabase(dbFileName);
            res.status(200).send(students);
        } catch (error) {
            res.status(500).send('Error reading database');
        }
    }
}

module.exports = StudentsController;