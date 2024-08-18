const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'add username as it mandatory']
    },
    password: {
        type: String,
        reqired: [true, 'password is mandatory'],
    },
    email: {
        type: String,
        reuired: [true, 'email is mandatory']
    }
},
    { timestamp: true }
)
module.exports = mongoose.model("User",userSchema);