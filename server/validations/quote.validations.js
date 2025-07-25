const Joi = require('joi');

// Quote validation middleware
const validateQuote = (req, res, next) => {
  const schema = Joi.object({
    service: Joi.string().required(),
    description: Joi.string().min(10).max(500).required(),
    price: Joi.number().min(0).required(),
    scheduledDate: Joi.date().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateQuote,
};
