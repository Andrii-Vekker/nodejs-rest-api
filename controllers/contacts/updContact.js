const Contact = require("../../models/contacts")
const HttpError = require("../../helpers/HttpError");

const updContact =  async (req, res, next) => {
  // try {
  //   const { id } = req.params
  //   const result = await contacts.updateContact(id, req.body);
  //   if (!result) {
  //     throw HttpError(404, "Not found");
  //   };
  //   res.json(result)
  // } catch (error) {
  //   next(error)
  // }
}

module.exports = updContact
