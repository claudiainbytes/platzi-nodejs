/**
* Ejemplo basico con connect
**/

//Middleware hola
//argumento next: funcion middleware ha terminado 
//de operar pase a la siguiente funcion, 
//es decir vaya a hola

function hola(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World #backendpro');
}

function loguear(req, res, next){
	console.log('#backendpro %s %s', req.method, req.url);
	next();
}

var connect = require('connect');
var app		= connect();

app
   .use(loguear) //Llamamos middleware loguear
   .use(hola) //Llamamos el middleware
   .listen(3000);