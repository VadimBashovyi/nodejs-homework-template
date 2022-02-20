const fs = require('fs/promises')
const path = require('path')
const { v4 } = require('uuid')

const contactsPath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, 'utf8')
  if (!contacts) return null
  const contactsParse = JSON.parse(contacts)
  return contactsParse
}

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  const contacGetId = contacts.find((e) => String(e.id) === contacGetId)
  if (!contacGetId) return null
  return contacGetId
}

const removeContact = async (contactId) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex((e) => String(e.id) === contactId)
  if (idx === -1) return null
  const [removeContact] = contacts.splice(idx, 1)
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return removeContact
}

const addContact = async (body) => {
  const contacts = await listContacts()
  const newContacts = {
    id: v4(),
    ...body,
  }
  contacts.push(newContacts)
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContacts
}

const updateContact = async (contactId, body) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex((e) => String(e.id) === contactId)
  if (idx === -1) return null
  contacts[idx] = { ...contacts[idx], ...body }
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return contacts[idx]
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
