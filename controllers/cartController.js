const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const item = new Cart({
    userId: req.user.id,
    productId: req.body.productId,
    quantity: req.body.quantity
  });
  await item.save();
  res.json({ message: "Added to cart" });
};

exports.updateCart = async (req, res) => {
  await Cart.findByIdAndUpdate(req.params.id, {
    quantity: req.body.quantity
  });
  res.json({ message: "Cart updated" });
};

exports.removeFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed from cart" });
};
