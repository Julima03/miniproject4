import Review from "../Models/Review.js";

export const getReviewsByMovie = async (movieId) => {
  return await Review.find({ movieId });
};

export const createReview = async (data) => {
  return await Review.create(data);
};

export const updateReview = async (id, data) => {
  return await Review.findByIdAndUpdate(id, data, { new: true });
};

export const deleteReview = async (id) => {
  return await Review.findByIdAndDelete(id);
};
