const { Contact } = require('../../models')

const addContactsControllers = async (req, res) => {
  const { _id } = req.user
  const newContact = await Contact.create({ ...req.body, owner: _id })
  res.status(201).json(newContact)
}

module.exports = addContactsControllers
