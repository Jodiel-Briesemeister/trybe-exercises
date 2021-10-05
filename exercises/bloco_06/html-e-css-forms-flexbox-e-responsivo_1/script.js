let options = document.getElementById("estados_id")
function getStates() {
  let states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < states.length; index += 1) {
    let createOptions = document.createElement('option');
    options.appendChild(createOptions).innerText = states[index];
  }
}

getStates();

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) { // Checa a posição das '/' ex: 10/02/2005, a primeira barra deve ficar após 2 caracteres e a segunda após 5!
  const day = data.substr(0, 2); // Recebe o dia ex: (13/03/2007) (0,2) -> vai trazer os 2 primeiros caracteres (13)
  const month = data.substr(3, 2); // Exemplo 2: (13/03/2007) (3, 2) -> vai trazer após a posição 3(/) os 2 caracteres seguintes: 03
  const year = data.substr(6, 4);
    if ((day > 0 && day < 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('#dataIni_id');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData) { // Checa se o userData retorna false
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}

function checkEmail() {
  const email = document.querySelector('#email_id');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail); // Linha 58
  if (!emailFormat) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}

function checkRadio() {
  const casa = document.querySelector('#casa');
  const apartamento = document.querySelector('#apartamento');
  if (casa.checked == false && apartamento.checked == false) {
    alert('selecione casa ou apartamento');
    return false
  }
  return true
}

// [a-z0-9.]+ - parte antes do @ do e-mail (permitido digitos 0 a 9, letras a - z e ponto .), nome do usuário;
// @ - caractere de arroba obrigatório;
// [a-z0-9]+ - parte depois do @ do e-mail, nome do provedor(ex: hotmail);
// \. - caractere de ponto depois do nome do provedor;
// [a-z]+ - geralmente onde é colocado o .com;
// \. - caractere de ponto depois do .com, quando há por exemplo um .br ou a abreviação de qualquer outro país no final do e-mail;
// ([a-z]+)? - geralmente onde é colocado a abreviação do país.

function renderCurriculum(event) {
  event.preventDefault(); // Impede que um evento aconteça, nesse caso impede que o botão submit prossiga imediatamente e não exiba os avisos dos campos marcados com required.
  const allInput = document.querySelectorAll('input');
  if(checkEmail() && checkRadio()  && checkData()) { // Checa se cada uma das funções retorna true
    for (let index = 0; index < allInput.length; index += 1) {
      if (allInput[index].type === 'radio' && !allInput[index].checked) { // Checa todos os inputs do tipo 'radio' e caso o input radio encontrado não esteja marcado(false) ele entra no if e no continue (pulando o valor atual para que não fique salvo na variavel userInput)
        continue;
      }
      const userInput = allInput[index].value;
      const dataUser = document.querySelector('.form-data');
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);

    }
  }

}

function clearFields() {
  const allInput = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum'); // div recebe o currículo gerado pelo renderCurriculum
  for (let index = 0; index < allInput.length; index += 1) {
    const userInput = allInput[index];
    userInput.value = '';
    textArea.value = '';
    if (div.length) { // Checa se div não é vazio
      div[index].innerText = '';
    }
  }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', renderCurriculum);

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearFields);
