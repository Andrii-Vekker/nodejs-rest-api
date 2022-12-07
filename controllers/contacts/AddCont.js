const contacts = require("../../models/contacts");

const addCont = async (req, res, next) => {
  try {
  
    const result = await contacts.addContact(req.body);
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = addCont