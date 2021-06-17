const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.route("/")
  .get(getAllUsers)
  .post(createUser)
;
router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)
;

module.exports = router;
