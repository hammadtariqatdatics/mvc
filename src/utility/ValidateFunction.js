const joi = require("joi");

const validateFunction = (payload) => {
  const schema = joi.object().keys({
    name: joi.string().min(5).max(10).required("Name is required"),
    email: joi.string().email().required("Email is required"),
    password: joi.string().min(8).required("Password is required"),
  });
  return schema.validate(payload);
};

module.exports = validateFunction;
