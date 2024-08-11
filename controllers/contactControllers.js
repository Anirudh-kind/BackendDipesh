const colors = require('colors')
const asyncHandler = require('express-async-handler')// just wrap the function around it and no need to use try-catch block

//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContact = async (req, res) => {
    res.status(200).json({ message: 'get all contacts' });
}

//@desc get a specific contact
//@route  Get /api/contatcts/:id
//@access public
const getSpecificContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `create specific contact of ${req.params.id}` });
})

//@desc put a new specific contact
//@route Put /api/contatcts/:id
//@access public
const createContact = asyncHandler(async (req, res) => {
    res.status(201).json({ message: `put specific contact of ${req.params.id}` });
})

//@desc update contact
//@route Post /api/contatcts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandatory".bgRed)
    }
    console.log(`req.body is :${JSON.stringify(req.body)}`.cyan)
    res.status(200).json({ message: `update contacts ${req.params.id}` });
})

//@desc delete a specific contact
//@route Delete /api/contatcts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete specific contact of ${req.params.id}` });
})
module.exports = { getContact, getSpecificContact, createContact, updateContact, deleteContact }