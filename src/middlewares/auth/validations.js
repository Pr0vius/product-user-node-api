const { check } = require('express-validator');
const { validResult } = require('../commons');
// const { validToken, validRole } = require('../../service/user.service');


const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailValid = check('email', 'Email is invalid').isEmail();
const _passwordRequired = check('password', 'Password required').not().isEmpty();


const loginValidations = [
    _emailRequired,
    _emailValid,
    _passwordRequired,
    validResult
]

module.exports = {
    loginValidations
}