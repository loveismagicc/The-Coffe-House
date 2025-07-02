const Order = require("../models/order.model");
const OrderDetail = require("../models/orderDetail.model");

exports.createOrder = async (req, res) => {
    const order = await Order.create(req.body);
    res.json(order);
};

exports.createOrderDetail = async (req, res) => {
    const detail = await OrderDetail.create(req.body);
    res.json(detail);
};

exports.getOrdersByUser = async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
};

exports.getOrderDetails = async (req, res) => {
    const details = await OrderDetail.find({ orderCode: req.params.orderCode }).populate("productId");
    res.json(details);
};
