/////////////////////////////////// OBJ KEYS /////////////////////////////////
// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// console.log(Object.keys(student1)[0]) // Html = Se fosse um array seria equivalente a student1[0]
// console.log(student1.Html) // Muito Bom = Retorna o valor na posição Html
// console.log(student1[Object.keys(student1)[0]]) // Muito Bom = Retorna o valor porém de forma dinamica possibilitando a exibição em um for

// Função 1 com Object.keys = Retorna a lista de skills e seus valores de forma dinâmica.
// const skillsList = (student) => {
//   let result = '';
//   for (index in Object.keys(student)) {
//     result += `${Object.keys(student)[index]}, Nivel: ${student[Object.keys(student)[index]]} \n`
//   }
//   return result;
// }
// console.log(skillsList(student1))
////////////////////////////////////////////////////////////////////////////////



//////////////////////////////// OBJ VALUES ///////////////////////////////////

// Função 2 com Object.keys + Object.values = Possui o mesmo retorno da função 1 porém o código é mais simples e intuitivo.
// const skillsList = (student) => {
//   let result = '';
//   for (index in Object.keys(student)) {
//     result += `${Object.keys(student)[index]}, Nivel: ${Object.values(student)[index]} \n`
//   }
//   return result;
// }
// console.log(skillsList(student2))
///////////////////////////////////////////////////////////////////////////////



/////////////////////////////////// OBJ ENTRIES ///////////////////////////////////
// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países); // Object.entries junta key e value dentro de uma unica posição de um array.
// console.log(pairKeyValue); //   [ [ 'França', 'Paris' ], [ 'Brasil', 'Brasília' ], ... ]


// // Exibição do console de forma organizada
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('Pais:', pairKeyValue[index][0]); //Aqui inserimos dois indices o INDEX( que vale 0) é a primeira posição do array [ 'França', 'Paris' ] e o segundo indice(0) seleciona a primeira palavra dentro do indice do array.('França')
//   console.log('Capital:', pairKeyValue[index][1]); // Aqui o mesmo acontece, de [ 'França', 'Paris' ] ele seleciona 'Paris'
// };
//////////////////////////////////////////////////////////////////////////////////



////////////////////////////// OBJ ASSIGN ///////////////////////////////////////

//Junta 1 ou mais objetos dentro de um objeto destino
// Ex: 
// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// ATENÇÃO
// Caso queira guardar os valores de dois Objetos diferentes utilizando Object.assign devemos evitar a seguinte situação:
// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName); // Nesse caso, além da variavel clone guardar as informações de person e 
// lastName, ele ainda utiliza person na posição 1(destino) e acaba atribuindo o lastName.

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Cezar'; // Como a atribuição anterior foi realizada de forma incorreta, a variavel clone ficou diretamente
// linkada ao objeto person, dessa forma ao alterar name de clone também altera name de person.

// console.log(clone); // { name: 'Cezar', lastName: 'Silva' }
// console.log(person); // { name: 'Cezar', lastName: 'Silva' }

// Forma correta de se atribuir Object.assign a uma variavel:
// const newPerson = Object.assign({},person,lastName); // Aqui na posição 1 recebe {} = vazio e portanto não fica linkado a 
// nenhum outro objeto, apenas newPerson.

// newPerson.name = 'Gilberto'; // Nesse caso alterara apenas o nome do obj newPerson, mudando de Roberto para Gilberto
// console.log(newPerson); // { name: 'Gilberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto' } // Person se manterá inalterado

////////////////////////////////////////////////////////////////////////////


