const { check } = require('express-validator');
const ErrorResponse = require('../../helpers/errorResponse');
const { validateToken } = require('../../service/auth.service');
const { validResult } = require('../commons');


const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailValid = check('email', 'Email is invalid').isEmail();
const _passwordRequired = check('password', 'Password required').not().isEmpty();


const loginValidations = [
    _emailRequired,
    _emailValid,
    _passwordRequired,
    validResult
]

const validateJWT = async (req,res,next) => {
    try {
        const token = req.header("Authorization");
        const user = await validateToken(token);
        req.user = user;
        next()
    } catch (err) {
        next(new ErrorResponse("Can't validate the token", 400, err))
    }
}

module.exports = {
    loginValidations,
    validateJWT
}