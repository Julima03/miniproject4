const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  comment: String,
  rating: Number,
});

module.exports = mongoose.model("Review", ReviewSchema);
