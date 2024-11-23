const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const bookingRoutes = require("./routes/booking");
const sequelize = require("./util/database");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/booking", bookingRoutes);

sequelize
  .sync({ alter: true })
  .then((result) => {
    console.log("result");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000);
