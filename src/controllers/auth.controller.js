const ErrorResponse = require("../helpers/errorResponse");
const Success = require("../helpers/successHandler");
const authService = require("../service/auth.service");

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await authService.login(email, password);
        res.json(new Success(user));
    } catch (err) {
        next(new ErrorResponse("Couldn't LogIn", 400, err));
    }
};
