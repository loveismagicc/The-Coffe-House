const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/order.controller");

router.post("/create", ctrl.createOrder);
router.post("/detail", ctrl.createOrderDetail);
router.get("/user/:userId", ctrl.getOrdersByUser);
router.get("/details/:orderCode", ctrl.getOrderDetails);

module.exports = router;