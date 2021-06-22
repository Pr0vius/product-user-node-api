const { validationResult } = require("express-validator");

const validResult = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        throw new ErrorResponse(`Validation Error`, 400, err.errors);
    }
    next();
};

module.exports = {
    validResult
}