const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    phone: String,
    address: String
});

module.exports = mongoose.model("Address", AddressSchema);