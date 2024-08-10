const colors = require('colors')

//@desc Get all Routes
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: 'get all contacts' });
}

//@desc get a specific contact
//@route  Get /api/contatcts/:id
//@access public
const getSpecificContact = (req, res) => {
    res.status(200).json({ message: `create specific contact of ${req.params.id}` });
}

//@desc put a new specific contact
//@route Put /api/contatcts/:id
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: `put specific contact of ${req.params.id}` });
}

//@desc update contact
//@route Post /api/contatcts/:id
//@access public
const updateContact = (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandatory".bgRed)
    }
    console.log(`req.body is :${JSON.stringify(req.body)}`.cyan)
    res.status(200).json({ message: `update contacts ${req.params.id}` });
}

//@desc delete a specific contact
//@route Delete /api/contatcts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete specific contact of ${req.params.id}` });
}

module.exports = { getContact, getSpecificContact, createContact, updateContact,deleteContact }