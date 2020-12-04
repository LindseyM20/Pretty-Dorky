const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/character"
router
  .route("/")
//   .get(postsController.findAll)
  .post(statsController.create);

// Matches with "/api/character/:id"
router
  .route("/:id")
  .get(statsController.findById)
  .put(statsController.update)
  // .delete(postsController.remove);

module.exports = router;
