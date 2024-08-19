// Require fs to read the file system
const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        // Attempt to read the file asynchronously
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                // If there's an error (e.g., file not found), reject the promise with an error
                reject(new Error('Cannot load the database'));
                return;
            }

            // Split the data into lines and filter out any empty lines
            const lines = data.split('\n').filter(line => line.trim() !== '');

            // Remove the header line
            const headers = lines.shift();

            // Object to hold the count and names of students in each field
            const studentsByField = {};

            // Process each line to extract student information
            lines.forEach((line) => {
                const [firstname, lastname, age, field] = line.split(',');

                // If the field is not in the object, initialize it
                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }

                // Add the student's first name to the corresponding field array
                studentsByField[field].push(firstname);
            });

            // Log the total number of students
            console.log(`Number of students: ${lines.length}`);

            // Log the number of students and their names for each field
            for (const [field, students] of Object.entries(studentsByField)) {
                console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            }

            // Resolve the promise
            resolve();
        });
    });
}

module.exports = countStudents;