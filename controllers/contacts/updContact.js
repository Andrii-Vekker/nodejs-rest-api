const contacts = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");

const Joi = require("joi")

const schema = Joi.object({
name: Joi.string().required(),
email: Joi.string().required(),
phone: Joi.string().required()
})

const updContact =  async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body)
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params
    const result = await contacts.updateContact(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    };
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = updContact
