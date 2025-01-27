const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'pokeman', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
