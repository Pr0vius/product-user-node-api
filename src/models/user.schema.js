const { Schema, model } = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate-v2');


const userSchema = new Schema(
    {
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        username: {
            type: String,
            unique: true,
            required: [true, "Username field is required"],
        },
        birthdate: {
            type: Date,
        },
        email: {
            type: String,
            required: [true, "Email field is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password field is required"],
            min: 6,
            select: false
        },
        role: {
            type: String,
            required: true,
            default: "USER_ROLE",
            enum: ["USER_ROLE", "ADMIN_ROLE"]
        },
        enabled: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    { timestamps: true }
);

userSchema.plugin(uniqueValidator,{message: 'Already exist'})
userSchema.plugin(mongoosePaginate);

module.exports = model("users", userSchema);
