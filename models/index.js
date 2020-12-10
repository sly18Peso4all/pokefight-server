require("dotenv").config();
const mongoose = require("mongoose");

const Game = require("./game");

const connectDB = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

exports.Game = Game;
exports.connectDB = connectDB;