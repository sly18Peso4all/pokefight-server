var express = require('express');
var router = express.Router();

const { getAllPokemon, getOnePokemon, getOnePokemonInfo } = require("../controllers/pokemon");

/* GET home page. */
router.get('/', getAllPokemon);
router.get('/:id', getOnePokemon);
router.get('/:id/:info', getOnePokemonInfo);

module.exports = router;


