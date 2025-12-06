import express from "express";
import {
  getCart,
  addItem,
  updateQty,
  deleteItem,
} from "../Controllers/CartController.js";

const router = express.Router();

router.get("/", getCart);
router.post("/", addItem);
router.put("/:id", updateQty);
router.delete("/:id", deleteItem);

export default router;
