const ErrorResponse = require("../helpers/errorResponse");
const Success = require("../helpers/successHandler");


exports.login = (req, res, next) => {
    const {email, password} = req.body;
    try {

        res.json(new Success({msj:"ok"}))
    } catch (err) {
        next(new ErrorResponse("Couldn't LogIn", 400, err))
    }
};