const contacts = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
 
    if (!result) {
      throw HttpError(404, "Not found")
    };
    res.json({
      message: "delete success"
    })
  } catch (error) {
    next(error)
  }
}

module.exports = deleteContact