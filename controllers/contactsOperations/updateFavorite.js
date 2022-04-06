const { Contact } = require('../../models')

const updateFavorite = async (req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const updateContacts = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true },
  )
  if (!updateContacts) {
    const error = new Error('Non found')
    error.status = 404
    throw error
  }
  res.json(updateContacts)
}

module.exports = updateFavorite
