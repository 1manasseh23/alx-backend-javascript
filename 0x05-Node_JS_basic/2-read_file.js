const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.split('\n').filter((line) => line.length > 0);

        const headers = lines.shift();

        const studentsByField = {};

        lines.forEach((line) => {
            const [firstname, lastname, age, field] = line.split(',');
            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
        });
        console.log(`Number of students: ${lines.length}`);

        for (const [field, students] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;