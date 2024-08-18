const asyncHandler = require('express-async-handler')// just wrap the function around it and no need to use try-catch block
const Contact = require('../models/contactModel')

//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContact =asyncHandler( async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
})

//@desc get a specific contact
//@route  Get /api/contatcts/:id
//@access public
const getSpecificContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error(`contact not find`.red)// getting TypeError: Cannot read properties of undefined (reading 'VALIDATION_ERROR') insted of this
    }
    res.status(200).json(contact);
})

//@desc  update contact
//@route Put /api/contatcts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOneAndUpdate(req.params.id, req.body, { upsert: true, new: true }) // throwing error here
    res.status(200).json(contact);
})

//@desc create a new contact
//@route Post /api/contatcts/
//@access public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandatory".bgRed)
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(200).json(contact);
    console.log(`req.body is :${JSON.stringify(req.body)}`.cyan)
})

//@desc delete a specific contact
//@route Delete /api/contatcts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error(`contact not find`.red)// getting TypeError: Cannot read properties of undefined (reading 'VALIDATION_ERROR') insted of this
    }
    await contact.remove()
    res.status(200).json(contact);
})
module.exports = { getContact, getSpecificContact, createContact, updateContact, deleteContact }