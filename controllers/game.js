const { Game } = require("../models");

exports.saveGameResult = async (req, res) => {
  const dbResponse = await Game.create(req.body);
  //console.log(dbResponse);
  //console.log(req.body);
  return res.status(200).json(dbResponse);
};

exports.getLeaderboard = async (req, res) => {
  const games = await Game.find();
  res.send(games);
};
