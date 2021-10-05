const isValidUsername = (req, res, next) => {
const { username } = req.body;
console.log(username);
if(!username || username.length < 3) {
  return res.status(400).json({ message: 'invalid username' });
}

  next();
};

const isValidEmail = (req, res, next) => { 
  const { email } = req.body

  if(
    !email ||
    !email.includes('@') ||
    !email.includes('.com')
  ) {
    return res.status(400).json({ message: 'invalid email' });
  }
  
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;

  if(
    password.length < 3 ||
    password.length > 8 ||
    !password.match(passwordRegex)
  ) {
    return res.status(400).json({ message: 'invalid password' });
  }
  
  next();
};

const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenRegex = /^[a-zA-Z0-9]{12}$/;

  if (!token || !tokenRegex.test(token)) {
    return res.status(401).json({ message: 'invalid token' });
  }

  next();
};

const isValidName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name.length <= 5) return res.status(404).json({ "message": "invalid data" });

  next();
};

const isValidInitial = (req, res, next) => {
  const { initials } = req.body;
  const initialsRegex = /^[A-Z]{3}$/;
  if (!initials || !initials.match(initialsRegex)) return res.status(404).json({ "message": "invalid data" });

  next();
};

const isValidCountry = (req, res, next) => {
  const { country } = req.body;

  if(!country || country.length <= 3) return res.status(404).json({ "message": "invalid data" });

  next();
}

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isValidToken,
  isValidName,
  isValidInitial,
  isValidCountry,
};