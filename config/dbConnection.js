const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`Database connected: HOST->${connect.connection.host} NAME->${connect.connection.name}`.yellow)
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports=connectDb;