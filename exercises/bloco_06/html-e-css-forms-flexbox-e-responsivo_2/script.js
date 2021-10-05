let options = document.getElementById("estados_id")
function getStates() {
  let states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < states.length; index += 1) {
    let createOptions = document.createElement('option');
    options.appendChild(createOptions).innerText = states[index];
  }
}
getStates();



var picker = new Pikaday({ //FUNÇÃO RETIRADA DE: https://github.com/Pikaday/Pikaday/blob/master/README.md
  field: document.getElementById('dataIni_id'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});



// data-validate-field : Name of field to which the rule will be applied
// https://github.com/horprogs/Just-validate/blob/master/README.md
new JustValidate('.js-form', { // Os campos que serão checados devem ter o elemento data-validate-field, ex: data-validate-field="name"
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11,
      minLength: 11
    },
    endereco: {
      required: true,
      maxLength: 200
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    estado: {
      required: true,
    },
    radio: {
      required: true,
    },
    textCurr: {
      required: true,
      maxLength: 1000
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    descriCargo: {
      required: true,
      maxLength: 500
    },
    dataIni: {
      required: true,
      maxLength: 9,
      minLength: 9,
    }
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.',
      minLength: 'Este campo deve ter 9 caracteres.'
    },
    endereco: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    cidade: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    estado: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    textCurr: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    cargo: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    descriCargo: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    dataIni: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 9 caracteres.',
      minLength: 'Este campo deve ter 9 caracteres.'
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);

    const allInput = document.querySelectorAll('input');
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
  }});


function clearFormData() { // Limpa apenas o div criado dentro de form-data pois o type="reset" apenas limpa os campos já existentes
  const div = document.querySelectorAll('.div-curriculum'); // div recebe o currículo gerado pelo renderCurriculum
  if (div.length != undefined && div.length) { // Checa se div é diferente de undefined e não é vazio
      for (let index = 0; index < div.length; index += 1) {
        div[index].innerText = '';
      }
  }
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearFormData);



