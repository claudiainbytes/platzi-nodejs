var connect = require('connect');
var app		= connect();

function hola(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World #backendpro ');
}

function loguear(req, res, next){
	console.log('#backendpro %s %s ', req.method, req.url);
	next();
}

//Middleware muestra un panel de administracion
//Aqui creamos las rutas
// http://localhost:3000/admin
// http://localhost:3000/admin/users

function admin(req, res, next){
	switch(req.url){
		case '/':
			res.end('try /users ');
			break;
		case '/users':
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(['claudia','lily','ana']));
			break;	

	}

}

//Middleware simula autenticacion
//cb es el callback del objeto error

function authWithDB(user, pass, cb){
	if(pass !== 'backendpro'){
		return cb('Credenciales Incorrectas: '+ user); //El argumento es un error
	}
	cb();
}

//Middleware de autenticacion

function restrict(req, res, next){

	var authorization = req.headers.authorization;

	if(!authorization){
		return next(new Error('No autorizado'));
	}

	var parts = authorization.split(' ');
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
		next(); //Accede al panel
	});
}

//Middleware que administra errores

function errorHandler(){
	//Se accede a la variable de entorno si existe, por defecto es development
	var env = process.env.NODE_ENV || 'development';
	//Al retornar funcion se pasan cuatro argumentos
	return function(err, req, res, next){
		rest.statusCode = 500; //Error interno del servidor
		switch(env){
			case 'development': 
				res.setHeader('Content-Type','application/json');
				res.end(JSON.stringify(err));
				break;
			default:
				res.end('Server error');
		}
	};
}


//Montaje del middleware

app
   .use(loguear) 
   .use('/admin', restrict) //no esta autenticado
   .use('/admin', admin) //accede al panel
   .use(hola) //Llamamos el middleware hola
   .use(errorHandler) //Siempre el middleware que administra errores va al final
   .listen(3000);