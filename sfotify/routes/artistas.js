var express = require('express');
var router = express.Router();
var artistas = require('../lib/artistas');

/* GET listado de artistas. */
router.get('/', function(req, res, next) {
  var artistas = ['Bieber', 'Cyrus', 'Shakira'];
  //res.send(artistas);
  res.render('artistas', { artistas: artistas });
});

module.exports = router;
