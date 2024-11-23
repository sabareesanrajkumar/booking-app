const fs = require("fs");
const path = require("path");
const Appointment = require("../models/appointment");

exports.getIndex = (req, res, next) => {
  const filePath = path.join(__dirname, "..", "views", "index.html");
  res.sendFile(filePath);
};

exports.postBooking = async (req, res, next) => {
  try {
    const { userName, phoneNumber, email } = req.body;
    const newAppointment = await Appointment.create({
      userName,
      phoneNumber,
      email,
    });

    console.log("new", newAppointment);
  } catch {}

  res.redirect("/booking");
};

exports.getBooking = (req, res, next) => {
  console.log("get booking");
};
