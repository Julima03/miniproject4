const Review = require("../Models/Review");

exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.movieId });
  res.json(reviews);
};

exports.addReview = async (req, res) => {
  const review = await Review.create({
    movieId: req.params.movieId,
    ...req.body,
  });
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
