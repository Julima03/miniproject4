import CartItem from "../Models/CartItem.js";

export const getCart = async () => {
  return await CartItem.find().populate("movieId");
};

export const addToCart = async (movieId) => {
  const existing = await CartItem.findOne({ movieId });

  if (existing) {
    existing.quantity += 1;
    return await existing.save();
  }

  return await CartItem.create({ movieId });
};

export const updateQuantity = async (id, qty) => {
  return await CartItem.findByIdAndUpdate(id, { quantity: qty }, { new: true });
};

export const removeFromCart = async (id) => {
  return await CartItem.findByIdAndDelete(id);
};
