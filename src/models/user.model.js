const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    phone: { type: String, unique: true },
    password: String,
    name: String,
    dateOfBirth: String,
    gender: Number
});

module.exports = mongoose.model("User", UserSchema);
