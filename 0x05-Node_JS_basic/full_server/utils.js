import fs from 'fs';

/**
 * Reads the data of students in a CSV data file.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      // Manually construct the object instead of using Object.fromEntries
      const studentEntry = {};
      studentPropNames.forEach((propName, idx) => {
        studentEntry[propName] = studentPropValues[idx];
      });

      studentGroups[field].push(studentEntry);
    }

    resolve(studentGroups);
  });
});

export default readDatabase;

// import fs from 'fs';

// /**
//  * Reads the data of students in a CSV data file.
//  */
// const readDatabase = (dataPath) => new Promise((resolve, reject) => {
//   if (!dataPath) {
//     reject(new Error('Cannot load the database'));
//   }
//   if (dataPath) {
//     fs.readFile(dataPath, (err, data) => {
//       if (err) {
//         reject(new Error('Cannot load the database'));
//       }
//       if (data) {
//         const fileLines = data
//           .toString('utf-8')
//           .trim()
//           .split('\n');
//         const studentGroups = {};
//         const dbFieldNames = fileLines[0].split(',');
//         const studentPropNames = dbFieldNames
//           .slice(0, dbFieldNames.length - 1);

//         for (const line of fileLines.slice(1)) {
//           const studentRecord = line.split(',');
//           const studentPropValues = studentRecord
//             .slice(0, studentRecord.length - 1);
//           const field = studentRecord[studentRecord.length - 1];
//           if (!Object.keys(studentGroups).includes(field)) {
//             studentGroups[field] = [];
//           }
//           const studentEntries = studentPropNames
//             .map((propName, idx) => [propName, studentPropValues[idx]]);
//           studentGroups[field].push(Object.fromEntries(studentEntries));
//         }
//         resolve(studentGroups);
//       }
//     });
//   }
// });

// export default readDatabase;
// module.exports = readDatabase;
