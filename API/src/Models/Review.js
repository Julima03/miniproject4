import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
});

export default mongoose.model("Review", reviewSchema);
