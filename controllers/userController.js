const asyncHandler = require('express-async-handler')// just wrap the function around it and no need to use try-catch block
const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')
//@desc Register the user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    console.log("Request received at /api/users/register");

    const { username, password, email } = req.body;

    if (!req.body || !username || !password || !email) {
        console.log("Missing fields in request body"); // Log the issue
        error.statusCode = 400;
        throw new Error('All fields are required');
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        console.log("User already exists.");
        res.status(400);
        throw new Error('user/email already exist')
    } else {
        console.log("User does not exist, proceeding to register.");
    }

    // create hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username, email, password: hashedPassword
    });

    console.log(`new user created ${user}`.bgMagenta);
    if (user) {
        res.status(200).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("user data is not valid");
    }

    res.json({ message: 'user is registered' })
})

//@desc Login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('all fields are mandatory')
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {

        const accessToken = jwt.sign({ user: { username: user.username, email: user.email, id: user.id } }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' })// algoTye+payload+secret

        res.status(200);
        res.json({ accessToken })
    } else {
        res.status(401);
        throw new Error('password/email isnt correct')
    }
})

//@desc Get the current user
//@route GET /api/users/current
//@access private
const curentUser = asyncHandler(async (req, res) => {
    res.json({ message: "current user information" })
})

module.exports = { registerUser, loginUser, curentUser }