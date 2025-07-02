const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/address.controller");

router.get("/:userId", ctrl.getByUserId);
router.post("/insert", ctrl.insert);
router.put("/update", ctrl.update);
router.delete("/:id", ctrl.delete);

module.exports = router;
