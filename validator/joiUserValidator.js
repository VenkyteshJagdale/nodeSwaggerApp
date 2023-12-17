const Joi = require("joi"),
validator = (schema)=>(payload)=>
schema.validate(payload,{abortEarly:false});

const addressSchema = Joi.object({
  lane_No: Joi.string().required(),
  city: Joi.string().required(),
  zipcode: Joi.number().integer().required()
});

const userSchema = Joi.object({
  userRegisterId: Joi.number().integer().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().integer().required(),
  address: Joi.array().items(addressSchema).min(1).required()
});

exports.validateRegisterSchema = validator(userSchema)