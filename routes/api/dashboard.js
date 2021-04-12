const router = require("express").Router();
const dashboardController = require("../../controllers/dashboardController");

// Matches with "/api/dashboard"
router.route("/dashboard")
  .get(dashboardController.findAll)
  .post(dashboardController.create);

// Matches with "/api/dashboard/:id"
router
  .route("/dashboard/:id")
  .get(dashboardController.findById)
  .put(dashboardController.update) 
  .delete(dashboardController.remove);

module.exports = router;
