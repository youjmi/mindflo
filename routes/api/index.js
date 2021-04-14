const router = require("express").Router();
const blogRoutes = require("./blog");
const dashboardRoutes= require("../dashboard");
const userRoutes = require("./user")

// blog,dashboard, user routes
router.use("/blog", blogRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/user", userRoutes);


module.exports = router;
