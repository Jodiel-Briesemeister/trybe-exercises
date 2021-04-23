const randomNumber = (() => {
  return Math.floor((Math.random()*101))
});

const upperCase = ((str) => {
  return str.toUpperCase();
});

const firstLetter = ((str) => {
  return str.charAt(0);
  //return str.charAt(0).toUpperCase() + str.slice(1)
});

const stringConcat = ((a, b) => {
  return a.concat(b);
});

const apiFunction = async () => {
  try {
  const response = await fetch('https://dog.ceo/dog-api/');
  const data = await response.json();
  } catch (error) { console.log(error) }
}

module.exports = { randomNumber, upperCase, firstLetter, stringConcat, apiFunction };