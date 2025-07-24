const Joi = require('joi');

// Quote validation
const quoteValidation = (data) => {
  const schema = Joi.object({
    service: Joi.string().required(),
    description: Joi.string().min(10).max(500).required(),
    price: Joi.number().min(0).required(),
    scheduledDate: Joi.date().required()
  });

  return schema.validate(data);
};

module.exports = {
  quoteValidation
};