const getAll = require('./getAll')
const getById = require('./getById')
const addContactsControllers = require('./addContacts')
const removeById = require('./removeById')
const updateById = require('./updateById')
const updateFavorite = require('./updateFavorite')

module.exports = {
  getAll,
  getById,
  addContactsControllers,
  removeById,
  updateById,
  updateFavorite,
}
