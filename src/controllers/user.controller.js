const User = require("../models/user.model");

exports.register = async (req, res) => {
    const { phone, password, name } = req.body;
    const user = await User.create({ phone, password, name });
    res.json(user);
};

exports.login = async (req, res) => {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone, password });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    res.json(user);
};

exports.getById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};
