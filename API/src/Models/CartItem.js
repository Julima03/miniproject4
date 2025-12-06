import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  quantity: { type: Number, default: 1 },
});

export default mongoose.model("CartItem", cartItemSchema);
