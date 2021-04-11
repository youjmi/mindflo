const router = require("express").Router();
const blogsController = require("../controllers/blogsController");

// Matches with "/api/blogs"
router.route("/blog")
  .get(blogsController.findAll)
  .post(blogsController.create);

// Matches with "/api/blogs/:id"
router
  .route("/blog/:id")
  .get(blogsController.findById)
  .put(blogsController.update) 
  .delete(blogsController.remove);

module.exports = router;
