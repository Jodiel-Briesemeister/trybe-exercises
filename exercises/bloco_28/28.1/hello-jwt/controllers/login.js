const jwt = require('jsonwebtoken'); // npm i jsonwebtoken

const Joi = require('joi');

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

const JWT_SECRET = 'meuSegredoSuperSegreto';

const userHardCoded = {
  username: 'admin',
  password: 's3nh4S3gur4???',
};

const login = (req, res, next) => {
  const { error } = validateBody(req.body);
  if (error) return next(error);

  const { username, password } = req.body;

  const payload = {
    username,
    admin: false,
  };

  if (username === userHardCoded.username && password === userHardCoded.password) {
    // return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
    payload.admin = true;
  }

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  // const jwtConfig = {
  //   expiresIn: '1h',
  //   algorithm: 'HS256',
  // };
  // const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);

  res.status(200).json({ token });
};

module.exports = {
  login,
};
