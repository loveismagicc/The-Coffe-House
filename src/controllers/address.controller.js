const Address = require("../models/address.model");

exports.getByUserId = async (req, res) => {
    const addresses = await Address.find({ userId: req.params.userId });
    res.json(addresses);
};

exports.insert = async (req, res) => {
    const address = await Address.create(req.body);
    res.json(address);
};

exports.update = async (req, res) => {
    const { id, ...rest } = req.body;
    await Address.findByIdAndUpdate(id, rest);
    res.json({ message: "Address updated" });
};

exports.delete = async (req, res) => {
    await Address.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};