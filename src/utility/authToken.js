const jwt = require("jsonwebtoken");
const secretKey = "1234";

const generateAuthToken = (name, email) => {
  //   console.log(name, email);
  const payload = {
    name: name,
    email: email,
  };
  return jwt.sign(payload, secretKey);
};

const verifyAuthToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  generateAuthToken,
  verifyAuthToken,
};
