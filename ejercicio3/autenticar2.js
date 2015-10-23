function restrict(req, res, next){

	var authoriza = req.headers.authorization;

	if(!authoriza){
		return next(new Error('No autorizado'));
	}

	var parts = authoriza.split('');
	var scheme = parts[0];
	var auth = new Buffer(parts[1],'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];	

	authWithDB(user, pass, function (err){
		if(err){
			//si a next se le manda un error, 
			//este salta
			return next(err); 
		}
		next(); //Continua a la funcion hola
	});
}