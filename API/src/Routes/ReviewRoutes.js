const router = require("express").Router();
const ReviewController = require("../Controllers/ReviewController");

router.get("/:movieId", ReviewController.getReviews);
router.post("/:movieId", ReviewController.addReview);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;
