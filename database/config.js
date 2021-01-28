const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.DB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB is ONLINE');
    } catch (error) {
        console.log(error);
        throw new Error('Error starting DB');
    }
}

module.exports = {dbConnection};
