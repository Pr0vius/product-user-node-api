const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: "/api/v1",
    },
    log: {
        level: process.env.LOG_LEVEL || "silly",
    },
    swagger:{
        path: '/api/documentation'
    },
    database:{
        mongodbURL : process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
    },
    webtoken:{
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    }
};
