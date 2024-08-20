const fs = require('fs');

const countStudents = (dataPath) => {
    if (!fs.existsSync(dataPath)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(dataPath).isFile()) {
      throw new Error('Cannot load the database');
    }
    const fileLines = fs
      .readFileSync(dataPath, 'utf-8')
      .toString('utf-8')
      .trim()
      .split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
  
    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
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
  };

  // function countStudents(path) {
//     try {
//         const data = fs.readFileSync(path, 'utf8');

//         const lines = data.split('\n').filter((line) => line.length > 0);

//         const headers = lines.shift();

//         const studentsByField = {};

//         lines.forEach((line) => {
//             const [firstname, lastname, age, field] = line.split(',');
//             if (!studentsByField[field]) {
//                 studentsByField[field] = [];
//             }
//             studentsByField[field].push(firstname);
//         });
//         console.log(`Number of students: ${lines.length}`);

//         for (const [field, students] of Object.entries(studentsByField)) {
//             console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
//         }

//     } catch (error) {
//         throw new Error('Cannot load the database');
//     }
// }


module.exports = countStudents;