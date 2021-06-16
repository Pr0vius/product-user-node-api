const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  updatePartialUser,
  deleteUser,
} = require("../controllers/user.controller");

router.route("/")
  .get(getAllUsers)
  .post(createUser);

router
  .route("/:id")
  .get(getUser)
  .put(updateUser)  
  .patch(updatePartialUser)
  .delete(deleteUser);

module.exports = router;
