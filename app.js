const express = require("express");
const app = express();
const dotenv = require("dotenv");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
dotenv.config({ path: "./config.env" });
const UserRouter = require("./src/routes/userRoute");
const userJobRoute = require("./src/routes/userJobRoute");
// const recommendRouter = require("./src/routes/recommendRoute");
const authRoutes = require("./src/routes/auth-route");
const jobRoutes = require("./src/routes/jobRoutes")
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(express.json());

app.use(cookieParser());

var accessLogStream = fs.createWriteStream(
  path.join("./src/utils", "access.log"),
  {
    flags: "a",
  }
);

app.use(morgan("dev", { stream: accessLogStream }));

app.use("/api/v1/auths", authRoutes);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/jobs", jobRoutes)
app.use("/api/v1/userjobs", userJobRoute)
// app.use("/api/v1/recommendations", recommendRouter);




module.exports = app;
