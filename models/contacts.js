const { Schema, model } = require("mongoose");

const contactsSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  favirite: Boolean,
});

const Contact = model("contact", contactsSchema);

module.exports = Contact



// const fs = require("fs").promises;
// const path = require("path");
// const { nanoid } = require("nanoid");

// const contactsPath = path.join(__dirname, "/contacts.json");

// const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// };

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const result = contacts.find(it => it.id === contactId);
//   return result || null;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex(it => it.id === contactId);
//   if (index === -1) {
//     return null
//   };
//   const [result] = contacts.splice(index, 1);
//   await updateContacts(contacts)
//   return result
// };

// const addContact = async ({name, email, phone}) => {
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone
//   };
//   contacts.push(newContact);
//   await updateContacts(contacts)
//   return newContact;
// };

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts()
//   const index = contacts.findIndex(it => it.id === contactId);

//   if (index === -1) {
//     return null
//   };

//   contacts[index] = { id: contactId, ...body }
//   await updateContacts(contacts)
//   return contacts
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
//   updateContacts,
// };
