const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/cart.controller");

router.get("/:userId", ctrl.getCartByUserId);
router.post("/add", ctrl.addToCart);
router.put("/update", ctrl.updateCart);
router.delete("/:cartId", ctrl.deleteCartItem);

module.exports = router;