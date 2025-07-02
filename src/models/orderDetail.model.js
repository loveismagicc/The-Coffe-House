const mongoose = require("mongoose");

const OrderDetailSchema = new mongoose.Schema({
    orderCode: String,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    note: String,
    toppingId: Number
});

module.exports = mongoose.model("OrderDetail", OrderDetailSchema);
