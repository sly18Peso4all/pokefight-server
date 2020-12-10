const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    pokemon_one: String,
    pokemon_two: String,
    number_of_rounds: Number,
    result: String,
  },
  { timestamp: true }
);

const Game = mongoose.model("game", GameSchema);
module.exports = Game;
