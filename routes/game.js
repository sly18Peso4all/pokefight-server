var express = require("express");
var router = express.Router();

const { saveGameResult, getLeaderboard } = require("../controllers/game");

/* GET home page. */
//router.get('/leaderboard', getGameLeaderboard);

router.post("/save", saveGameResult);
router.get("/leaderboard", getLeaderboard);

module.exports = router;
