const express = require("express");
const router = express.Router();
const payController = require("../controller/payumoney");
router.post("/payment/payumoney", payController.payUMoneyPayment);

module.exports = router;
