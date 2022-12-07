const contacts = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");

const Joi = require("joi")

const schema = Joi.object({
name: Joi.string().required(),
email: Joi.string().required(),
phone: Joi.string().required()
})

const addCont = async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = addCont