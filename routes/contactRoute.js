const express = require('express')
const router = express.Router();
const { getContact, getSpecificContact, createContact, updateContact, deleteContact } = require('../controllers/contactControllers')

// here we have passed all the functions to controllers folder
router.route('/').get(getContact)

router.route('/:id').get(getSpecificContact)

router.route('/:id').put(createContact)

router.route('/').post(updateContact)

router.route('/:id').delete(deleteContact)


module.exports = router;