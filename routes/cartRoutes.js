const express = require("express");
const Cart = require("../models/Cart");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const { productId, quantity } = req.body;

  const cartItem = await Cart.create({
    user: req.user,
    product: productId,
    quantity,
  });

  res.json(cartItem);
});

router.put("/:id", protect, async (req, res) => {
  const cartItem = await Cart.findById(req.params.id);
  cartItem.quantity = req.body.quantity;
  await cartItem.save();
  res.json(cartItem);
});

router.delete("/:id", protect, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed from cart" });
});

module.exports = router;
