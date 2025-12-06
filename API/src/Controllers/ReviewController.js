import * as reviewService from "../Services/ReviewService.js";

export const getReviews = async (req, res) => {
  const reviews = await reviewService.getReviewsByMovie(req.params.movieId);
  res.json(reviews);
};

export const createReview = async (req, res) => {
  const review = await reviewService.createReview(req.body);
  res.json(review);
};

export const updateReview = async (req, res) => {
  const review = await reviewService.updateReview(req.params.id, req.body);
  res.json(review);
};

export const deleteReview = async (req, res) => {
  await reviewService.deleteReview(req.params.id);
  res.json({ message: "Deleted" });
};
