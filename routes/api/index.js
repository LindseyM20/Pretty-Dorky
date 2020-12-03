const router = require("express").Router();
const characterRoutes = require("./character");

// Post routes
router.use("/character", characterRoutes);

module.exports = router;