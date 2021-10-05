// Exercício 3 - Criar um botão e um input que informa o número de cliques no botão.
// const countClicks = () => {
//   const buttonClick = document.getElementById("clicks")
//   let count = 0;
//   buttonClick.addEventListener('click', function(event) {
//     count += 1;
//     const inputClicks = document.getElementById("showClicks");
//     inputClicks.value = count;
//   })
// };
// countClicks();

// Exercício 4 - Montar uma frase retornando seu nome e seus conhecimentos.
// FUNÇÃO 1 + FUNÇÃO 2
const arraySkills = ['javaScript', 'Html', 'Css', 'Dom', 'nsei']

function createPhrase (word) {
  let phraseOne = `Tryber ${word} aqui!` // Tryber Jodiel aqui!

  let result = `${phraseOne} \n Minhas cinco principais habilidades são:` // Junta com a frase com a frase de cima
   
  arraySkills.forEach((skill) => // realiza o for concatenando cada valor do array e pulando linha
    result += `\n\n - ${skill}`
  )

  result += `\n\n #goTrybe`
    
  return result;
}

console.log(createPhrase("Jodiel"))