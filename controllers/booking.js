const fs = require("fs");
const path = require("path");
const Appointment = require("../models/appointment");

exports.getIndex = (req, res, next) => {
  const filePath = path.join(__dirname, "..", "views", "index.html");
  console.log("get booking");
  Appointment.findAll()
    .then((appointment) => {
      res.json(appointment);
    })
    .catch((err) => {
      console.log(err);
    });
  res.sendFile(filePath);
};

exports.getBooking = (req, res, next) => {};

exports.postBooking = async (req, res, next) => {
  try {
    const { userName, phoneNumber, email } = req.body;
    const newAppointment = await Appointment.create({
      username: userName,
      phonenumber: phoneNumber,
      email: email,
    });

    console.log("new", newAppointment);
  } catch {}

  res.redirect("/booking");
};
