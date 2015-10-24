//Llamar el paquete mongoose
var mongoose = require('mongoose');

//Creamos el esquema para nuestra base de datos
var Schema 	= mongoose.Schema;

//Establecemos la conexion a la base de datos nosql para artistas
//Api de mongoose 
//http://mongoosejs.com/docs/api.html

mongoose.connect("mongodb://127.0.0.1:27017/sfotify");


//Creamos el esquema para artistas
var artistaSchema = new Schema({
	name :  String,
	slug : String, 
	albums :[{
			title : String,
			year  : Number,
			image : String,
	}],
	shows : [{
		city: String
	}]
});

//Crear un modelo llamado artista usando el esquema llamado artista
var Artista = mongoose.model('Artista', artistaSchema);

//Exportamos el modulo, modelo Artista
module.exports = Artista;