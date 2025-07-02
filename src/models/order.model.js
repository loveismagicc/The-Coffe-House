const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderDate: String,
    customerName: String,
    customerPhone: String,
    deliveryAddress: String,
    deliveryNote: String,
    storeId: Number,
    totalAmount: Number,
    status: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderCode: String
});

module.exports = mongoose.model("Order", OrderSchema);
