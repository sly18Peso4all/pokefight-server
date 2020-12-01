var express = require('express');
var router = express.Router();

let jsonData = require('../pokemonData.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(jsonData);
});


router.get('/:id', function(req, res, next) {
  const pokemonID = req.params.id;
  const singlePokemon = jsonData.filter(item => parseInt(item.id) === parseInt(pokemonID));
  
  res.send(singlePokemon);
});
router.get('/:id/:info', function(req, res, next) {
  const pokemonID = req.params.id;
  const pokemonInfo = req.params.info;
  const singlePokemon = jsonData.find(item => parseInt(item.id) === parseInt(pokemonID));
  
  res.send(singlePokemon[pokemonInfo]);
});

module.exports = router;


