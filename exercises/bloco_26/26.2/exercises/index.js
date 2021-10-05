function test(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(Error("Informe apenas números"));
    }
    
    const result = (a + b) * c

    if (result < 50) reject(Error("Valor muito baixo"));

    resolve(result)
  });

}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

// function callTestThen() {

// const randomNumbers = Array.from({ length: 3 }).map(randomNumber);

//   test(...randomNumbers)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(`Erro: ${err.message}`));

// }

// callTestThen();

async function callTestAsync() {
  
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);

  try{
    const result = await test(...randomNumbers)
    console.log(result);
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
}

callTestAsync();

