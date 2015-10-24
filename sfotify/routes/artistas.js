var express = require('express');
var router = express.Router();

var Artistas = require('../lib/artistas');

var debug = require('debug')('my-application:artistas');

var _ = require('lodash');

/* GET listado de artistas. */
router.get('/', function(req, res, next) {
  //var artistas = ['Bieber', 'Cyrus', 'Shakira'];
  //res.send(artistas);
 
  //Validamos  	 
  Artistas.find({}, function(err, artistas){
  	if(err){
  		return res.send(err);
  	}
  	//Aqui enviamos a la vista artistas/artistas.ejs
  	res.render('artistas/artistas', { artistas: artistas });	
  });

  
});

//El orden de los middlewares si importa

/* Agregar nuevo artista, primero debe ser la ruta de agregar */
router.get('/agregar', function(req, res) {
  
  	//Aqui enviamos a la vista formulario artistas/agregar.ejs
  	res.render('artistas/agregar');	

});

/* GET Obtener detalle artistas. Luego la ruta del id */
router.get('/:artista_id', function(req, res) {
  
  //Validamos  	 
  Artistas.findById( req.params.artista_id, function(err, artista){

  	//Aqui enviamos a la vista al detalle artistas/detalle.ejs
  	res.render('artistas/detalle', { artista: artista });	

  });
  
});

router.post('/', function(req, res) {
    
	debug('Creando nuevo artista');
	var name = req.body.name;

	if( !_.isUndefined(name) || name !== ''){
		var artista = new Artistas( { name : name } );
		artista.save(function(err, artista){
			if(err){
				return res.send(err);
			}
			res.send(artista.name + "fue guardado");
		});
	}else{
		res.send("Por favor, especifique el nombre del artista");
		
	}

});



module.exports = router;
