const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app.js");

app.use(express.json());

// console.log("Connected To Database!");
// .then(()=>{
// })
const db = async() =>{
  mongoose.set('strictQuery', false)
    await  mongoose.connect(process.env.DB_URL)
};
db()
mongoose.connection.once("open", () => {
 console.log("Connected To Database!");
});
app.listen(process.env.DB_PORT, () => {
  console.log("APP IS LISTENING ON PORT " + process.env.DB_PORT);
});