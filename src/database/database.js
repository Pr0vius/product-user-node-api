const mongoose = require("mongoose");
const { database } = require("../config/index");
const logger = require('../loaders/logger/winston.logger');

const connectDatabase = async () => {
    try {
        const CONNECTION = await mongoose.connect(database.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
    
        logger.info(`DB is CONNECTED ${CONNECTION.connection.host}`);
    } catch (err) {
        logger.error(`Error at Database connection\n ${err}`)
    }
};

module.exports = connectDatabase;

