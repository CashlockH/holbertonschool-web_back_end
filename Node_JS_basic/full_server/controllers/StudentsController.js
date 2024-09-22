const { response } = require('express');
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
    static async getAllStudentsByMajor(req, res, dbFileName) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const students = await readDatabase(dbFileName);
            let name_list = []
            const line = students.split('\n')
            for (let index = 0; index < line.length; index++) {
                if (line[index].search(major) >= 0)
                    name_list.push(line[index].split('List: ')[1])
            }

            let response = `List: ${name_list[0]}\n`
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;