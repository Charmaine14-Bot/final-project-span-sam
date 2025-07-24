const Joi = require('joi');

// User validation
const userValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    role: Joi.string().valid('customer', 'provider', 'admin'),
    phone: Joi.string().max(20),
    avatar: Joi.string()
  });

  return schema.validate(data);
};

// Update user validation
const updateUserValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50),
    email: Joi.string().min(6).max(255).email(),
    phone: Joi.string().max(20),
    avatar: Joi.string()
  });

  return schema.validate(data);
};

module.exports = {
  userValidation,
  updateUserValidation
};