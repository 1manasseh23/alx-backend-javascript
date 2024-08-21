const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});
/*
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
*/

module.exports = countStudents;
