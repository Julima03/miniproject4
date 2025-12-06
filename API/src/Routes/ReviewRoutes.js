import express from "express";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../Controllers/ReviewController.js";

const router = express.Router();

router.get("/:movieId", getReviews);
router.post("/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
