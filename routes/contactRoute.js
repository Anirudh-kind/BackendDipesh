const express = require('express')
const router = express.Router();
const { getContact, getSpecificContact, createContact, updateContact, deleteContact } = require('../controllers/contactControllers')

// here we have passed all the functions to controllers folder
router.route('/').get(getContact).post(createContact)

router.route('/:id').get(getSpecificContact).put(updateContact).delete(deleteContact)

module.exports = router;