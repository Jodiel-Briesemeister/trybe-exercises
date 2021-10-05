const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};
addNewKey(lesson2, 'turno', 'noite');


// Exercício 2
const keyList = (obj) => {
  console.log('Exercício 2:')
  for (index in Object.keys(obj)) {
    console.log(Object.keys(obj)[index])
  }
}
keyList(lesson3)


// Exercício 3
const objLength = (obj) => {
  console.log(`Exercício 3 - Tamanho do objeto: ${Object.keys(obj).length}`)
}
objLength(lesson3)

// Exercício 4
const valueList = (obj) => {
  console.log('Exercício 4:')
  for (index in Object.values(obj)) {
    console.log(Object.values(obj)[index])
  }
}
valueList(lesson3)

// Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Exercício 6
const studentAmount = (obj) => {
  let total = 0;
  let lessons = Object.keys(obj);
  for (index in lessons) {
    total += obj[lessons[index]].numeroEstudantes
  }
  console.log (`Quantidade total de estudantes: ${total}`)
}
studentAmount(allLessons)

// Exercício 7
const objPos = (obj, pos) => console.log(Object.values(obj)[pos]);

objPos(lesson1, 0)

// Exercício 8
const verifyPair = (obj, key, value) => {
  let pairs = Object.entries(obj);
  let result = false;
  for (index in pairs) {
    if (pairs[index][0] === key && pairs[index][1] === value) {
      result = true;
    }
  }
  return result;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
