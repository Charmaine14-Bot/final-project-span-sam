const Joi = require('joi');

// Service validation
const serviceValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(500).required(),
    category: Joi.string().valid(
      'cleaning',
      'moving',
      'electrical',
      'plumbing',
      'painting',
      'carpentry',
      'landscaping',
      'appliance',
      'other'
    ).required(),
    price: Joi.number().min(0).required(),
    estimatedTime: Joi.number().min(0.5).required()
  });

  return schema.validate(data);
};

module.exports = {
  serviceValidation
};