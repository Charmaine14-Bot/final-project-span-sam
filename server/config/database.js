const mongoose = require('mongoose');
const config = require('dotenv').config();

const connectBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected ... we in');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectBD