const router = require("express").Router();
const userController = require("../controllers/userController");

// Matches with "/api/books"
router.route("/user")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/user/:id") 
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
