import * as cartService from "../Services/CartService.js";

export const getCart = async (req, res) => {
  const cart = await cartService.getCart();
  res.json(cart);
};

export const addItem = async (req, res) => {
  const item = await cartService.addToCart(req.body.movieId);
  res.json(item);
};

export const updateQty = async (req, res) => {
  const item = await cartService.updateQuantity(
    req.params.id,
    req.body.quantity
  );
  res.json(item);
};

export const deleteItem = async (req, res) => {
  await cartService.removeFromCart(req.params.id);
  res.json({ message: "Removed" });
};
