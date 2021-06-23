const { Router } = require("express");
const router = Router();

const { login } = require("../controllers/auth.controller");
const { loginValidations } = require("../middlewares/auth/validations");

router.post("/login", loginValidations, login);

module.exports = router;
