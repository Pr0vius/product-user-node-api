const { Router } = require("express");
const router = Router();
const {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");
const { postValidations, putValidations } = require("../middlewares/request/validations");

router
  .route("/")
  .get(getAllUsers)
  .post(postValidations, createUser)
;
router
  .route("/:id")
  .get(getUser)
  .put(putValidations,updateUser)
  .delete(deleteUser)
;

module.exports = router;
