const path = require("path");
const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking");

router.get("/", bookingController.getIndex);
router.post("/", bookingController.postBooking);

module.exports = router;
