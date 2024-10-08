const express = require('express')
const router = express.Router();
const { registerUser, loginUser, curentUser } = require('../controllers/userController');

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/current', curentUser)

module.exports = router;