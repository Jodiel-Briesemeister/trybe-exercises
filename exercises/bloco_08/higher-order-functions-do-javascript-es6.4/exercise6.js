const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const gradeAverage = (array, index) => {
  const sum = array[index].reduce(((acc, curr) => acc + curr),0);
  return sum / array[index].length
}

function studentAverage() {
  return students.reduce((acc, student, index) => {
    const object = {
      name: student,
      average: gradeAverage(grades, index)
    }
    acc.push(object);
    return acc
  },[])
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);