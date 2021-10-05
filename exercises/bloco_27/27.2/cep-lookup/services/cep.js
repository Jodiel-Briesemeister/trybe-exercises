const cepModels = require('../models/cep');

const findByCep = async (paramCep) => {

  const validCep = /^\d{5}-\d{3}$/;

  if (!(paramCep.match(validCep)))
  return { 
    error: { 
      code: "invalidData", 
      message: "CEP inválido" 
    } 
  };
  const formatedCep = paramCep.replace('-', '');
  const result = await cepModels.findByCep(formatedCep);

  if (!result) return { 
    error: {
      code: "notFound", 
      message: "CEP não encontrado" 
    } 
  }

  return result;
};

const createCep = async ({cep, logradouro, bairro, localidade, uf}) => {
  const formatedCep = cep.replace('-', '');
  const cepExists = await cepModels.findByCep(formatedCep);
  if (cepExists) return { 
    error: { 
      code: "alreadyExists",
      message: "CEP já existente" 
    }
  }
  return cepModels.createCep(formatedCep, logradouro, bairro, localidade, uf);
};

module.exports = {
  findByCep,
  createCep,
}