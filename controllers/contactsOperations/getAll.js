const contactsOperation = require('../../models')

const getAll = async (_, res) => {
  const contacts = await contactsOperation.listContacts()
  if (!contacts) {
    const error = new Error('Not found')
    error.status = 404
    throw error
  }
  res.json(contacts)
}

module.exports = getAll
