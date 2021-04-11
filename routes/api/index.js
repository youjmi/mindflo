const router = require("express").Router();
const blogRoutes = require("./blog");
const userRoutes = require("./user")

// Book routes
router.use("/blog", blogRoutes);

router.use("/user", userRoutes);


module.exports = router;
