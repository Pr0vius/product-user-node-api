const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { webtoken } = require("../config/index");
const ErrorResponse = require("../helpers/errorResponse");
const userService = require("./user.service");

const login = async (email, password) => {
    try {
        //Email Validation
        const user = await userService.findByEmail(email);
        if (!user) {
            throw new ErrorResponse(
                "Couldn't LogIn",
                400,
                "User doesn't exist"
            );
        }

        // User status Validation
        if (!user.enabled) {
            throw new ErrorResponse("Authentication failed! User disabled.", 401);
        }
        // Password Validation
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            throw new ErrorResponse(
                "Couldn't LogIn",
                400,
                "User doesn't exist"
            );
        }

        // JSONWEBTOKEN
        const token = await _encrypt(user._id);

        return {
            token,
            role: user.role,
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            birthdate: user.birthdate,
            email: user.email,
            enabled: user.enabled
        };
    } catch (err) {
        throw new ErrorResponse("Something went wrong", 500, err);
    }
};

const _encrypt = (id) => {
    return jwt.sign({ id }, webtoken.secret, { expiresIn: webtoken.expires });
};

const validateToken = async (token) => {
    try {
        let id;

        //Verify Token
        if (!token) {
            throw new ErrorResponse(
                "Authentication Failed",
                401,
                "Token Required"
            );
        }
        try {
            const decoded = jwt.verify(token, webtoken.secret);
            id = decoded.id;
        } catch (error) {
            throw new ErrorResponse(
                "Authentication Failed",
                401,
                "Invalid Token"
            );
        }
        //Find User
        const user = await userService.findById(id);
        if (!user) {
            throw new ErrorResponse(
                "Authentication Failed",
                401,
                "Invalid Token"
            );
        }

        //Verify user state
        if (!user.enabled) {
            throw new ErrorResponse(
                "Authentication Failed",
                401,
                "User Disabled"
            );
        }

        return user;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    login,
    validateToken,
};
