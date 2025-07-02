const Cart = require("../models/cart.model");

exports.getCartByUserId = async (req, res) => {
    const cartItems = await Cart.find({ userId: req.params.userId }).populate("productId");
    res.json(cartItems);
};

exports.addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    const existing = await Cart.findOne({ userId, productId });
    if (existing) {
        existing.quantity += quantity;
        await existing.save();
    } else {
        await Cart.create({ userId, productId, quantity });
    }
    res.json({ message: "Cart updated" });
};

exports.updateCart = async (req, res) => {
    const { cartId, quantity } = req.body;
    await Cart.findByIdAndUpdate(cartId, { quantity });
    res.json({ message: "Updated" });
};

exports.deleteCartItem = async (req, res) => {
    await Cart.findByIdAndDelete(req.params.cartId);
    res.json({ message: "Deleted" });
};

