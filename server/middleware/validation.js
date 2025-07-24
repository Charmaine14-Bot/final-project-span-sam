const { quoteValidation, serviceValidation } = require('../validations');

exports.validateQuote = (req, res, next) => {
  const { error } = quoteValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

exports.validateService = (req, res, next) => {
  const { error } = serviceValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const { userValidation, updateUserValidation } = require('../validations/user.validations');

exports.validateUser = (req, res, next) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

exports.validateUpdateUser = (req, res, next) => {
  const { error } = updateUserValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};