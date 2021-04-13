// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
//const fetch = require("node-fetch");

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerHTML = data.joke);
};

//

const sumRandomNumbers = () => {

    let sum = 0;
    for (let i= 0; i <= 10; i += 1) {
      sum += (Math.floor(Math.random() * 50) + 1) ** 2;
    }
    
    if (sum >= 8000) {
      throw new Error();
    }
  
    return sum;
  };

  // With higher order functions:
  // const myArray = Array.from(
  //   { length: 10 },
  //   () => Math.floor(Math.random() * 50) + 1
  // );
  // const sum = myArray.map(number => number * number)
  //   .reduce((number, acc) => number + acc, 0);

  const divSum = (param) => {
    const array = [2, 3, 5, 10];
    const result = array.map(number => param / number)
    return result
  }

  const fetchPromise = async () => {
    try {
      const sum = await sumRandomNumbers();
      const div = await console.log(`Divisão por [2, 3, 5 e 10]: ${divSum(sum)}`)
      const sumDiv = await console.log(`Soma dos elementos do array: ${divSum(sum).reduce((acc, curr) => acc + curr, 0)}`)
    } catch (error) {
      console.log('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  }
  
  
fetchPromise();

// fetchJoke();
// window.onload = () => fetchJoke();