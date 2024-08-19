// Requuire fs to read the file system
const fs = require('fs');

//function to count the students
function countStudents(path) {
    try {
        //Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // split the data by into lines and filterd out the empty lines
        const lines = data.split('\n').filter((line) => line.length > 0);

        // Remove the header line
        const headers = lines.shift();

        // Object to hold and count the name of students in each field
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

        //  Log the number of students and their names for each field
        for (const [field, students] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

    } catch (error) {
        // If there's an error reading the file, throw an error with the specified message
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;