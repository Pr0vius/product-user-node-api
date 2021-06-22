const ErrorResponse = require("../helpers/errorResponse");
const Success = require("../helpers/successHandler");
const User = require("../service/user.service");

exports.login = (req, res, next) => {
    try {

        res.json(new Success({msj:"ok"}))
    } catch (err) {
        next(new ErrorResponse("Couldn't LogIn", 400, err))
    }
};