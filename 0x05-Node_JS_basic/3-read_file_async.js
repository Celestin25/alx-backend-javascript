const fs = require('fs');

const countStudents = (path) => {
  const promise = (res, rej) => {
    fs.readFile(path, 'utf8', (err, resData) => {
      if (err) {
        rej(Error('Cannot load the database'));
      }
      const printOut = [];
      let printItem; // item to printed
      const data = resData.toString().split('\n');
      let students = data.filter((item) => item);
      students = students.map((item) => item.split(','));
      printItem = `Number of students: ${students.length - 1}`;
      console.log(printItem);
      printOut.push(printItem);

      const fields = {};
      for (const student in students) {
        if (student !== 0) {
          if (!fields[students[student][3]]) {
            fields[students[student][3]] = [];
          }
          fields[students[student][3]].push(students[student][0]);
        }
      }
      delete fields.field;
      for (const key of Object.keys(fields)) {
        printItem = `Number of students in ${key}: ${
          fields[key].length}. List: ${fields[key].join(',')}`;
        console.log(printItem);
        printOut.push(printItem);
      }
      res(printOut);
    });
  };

  return new Promise(promise);
};

module.exports = countStudents;