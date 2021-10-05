const fs = require('fs').promises;

const arquivo = 'simpsons.json';

async function readSimpsons() {
  try{
    const data = await fs.readFile(arquivo, 'utf8');
    const result = JSON.parse(data);
    const newArray = result.map(({id, name}) => `${id} - ${name}`);
    newArray.forEach((value) => console.log(value));
  }
  catch(err) {
    console.log(`Erro: ${err}`)
  }
}

readSimpsons();

// async function searchCharacter(id) {
//   try {
//     const data = await fs.readFile(arquivo, 'utf8');
//     const result = JSON.parse(data);
//     const characterFound = result.find((simpson) => simpson.id === String(id));
//     if (characterFound) {
//       console.log(characterFound);
//     } else {
//       throw new Error('id não encontrado');
//     }
//   }
//   catch (err) {
//     console.log(`Erro: ${err.message}`);
//   }
// }

// searchCharacter(49);

// async function removeCharacters(paramId) {
//   try{
//     const data = await fs.readFile(arquivo, 'utf8');
//     const result = await JSON.parse(data);
//     const newArray = result.filter(
//       (simpson) => simpson.id !== String(paramId[0]) && simpson.id !== String(paramId[1]))
//     await fs.writeFile(arquivo, JSON.stringify(newArray));
//   }
//   catch (err) {
//     console.log(err);
//   }
// }

// removeCharacters([10, 6]);

// async function createNewFile() {
//   try{
//     const data = await fs.readFile(arquivo, 'utf8');
//     const result = await JSON.parse(data);
//     const newArray = result.filter(
//       (simpson) => parseInt(simpson.id) < 5 || simpson.id === '8')
//     await fs.writeFile('simpsonFamily.json', JSON.stringify(newArray));
//   }
//   catch(err) {
//     console.log(err);
//   }
// }

// createNewFile();

// async function substitute() {
//   try{
//     const data = await fs.readFile('simpsonFamily.json', 'utf8');
//     const result = await JSON.parse(data);
//     const newArray = result.map((simpson) => {
//       if (simpson.name === 'Nelson Muntz') {
//         return { id: simpson.id, name: 'Maggie Simpson' };
//       } else {
//         return simpson
//       }
//     })
//     await fs.writeFile('simpsonFamily.json', JSON.stringify(newArray));
//   }
//   catch(err) {
//     console.log(err);
//   }
// }

// substitute();
