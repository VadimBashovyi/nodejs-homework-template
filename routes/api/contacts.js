const express = require('express')

const router = express.Router()

const { contactsController: ctrl } = require('../../controllers')
const { validation, ctrlWrapper } = require('../../middlewares')
const { contactsSchema } = require('../../schemas/index')

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:contactId', ctrlWrapper(ctrl.getById))

router.post(
  '/',
  validation(contactsSchema.schemaUpdateContact),
  ctrlWrapper(ctrl.addContactsControllers),
)

router.put(
  '/:contactId',
  validation(contactsSchema.schemaUpdateContact),
  ctrlWrapper(ctrl.updateById),
)

router.delete('/:contactId', ctrlWrapper(ctrl.removeById))

module.exports = router
