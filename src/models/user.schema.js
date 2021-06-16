const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        required: [true, "Username field is required"],
    },
    birthdate:{
        type: Date
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password field is required"],
    }
},{timestamps: true});

module.exports = model("users", userSchema);
