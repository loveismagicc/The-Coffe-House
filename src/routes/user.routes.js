const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/user.controller");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.get("/:id", ctrl.getById);

module.exports = router;