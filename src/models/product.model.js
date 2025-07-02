const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    salePrice: Number,
    imageUrl: String,
    categoryId: Number,
    isBestseller: Boolean,
    isRecommended: Boolean,
    isAvailable: Boolean
});

module.exports = mongoose.model("Product", ProductSchema);
