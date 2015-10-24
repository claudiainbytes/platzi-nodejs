//Importamos modulo del modelo Artistas
var Artista = require('../lib/artistas');

var todosLosArtistas = [];

todosLosArtistas.push( new Artista({
	name :  "Katy Perry",
	slug :  "katy-perry", 
	albums :[
			 { title : "PRISM", year  : "2013", image : "prism"}, 
		     { title : "Teenage Dream", year  : "2010", image : "teenage-dream"},		
	        ],
	shows : [
			 { city: "Bogotá" }, 
			 { city: "Santiago De Chile" },
			 { city: "Lima" },
			]
	})
);

todosLosArtistas.push( new Artista({
	name :  "Britney Spears",
	slug :  "britney-spears", 
	albums :[
			 { title : "Baby One More Time", year  : "1999", image : "baby-one-more-time"}, 
		     { title : "Opps! I did it again", year  : "2000", image : "oops-i-did-it-again"},		
	        ],
	shows : [
			 { city: "Bogotá" }, 
			 { city: "Caracas" },
			 { city: "Buenos Aires" },
			 { city: "Sao Paulo" },
			]
	})
);

todosLosArtistas.push( new Artista({
	name :  "Backstreet Boys",
	slug :  "backstreet-boys", 
	albums :[
			 { title : "Backstreet Back", year  : "1997", image : "backstreet-back"}, 
		     { title : "Millenium", year  : "1999", image : "millenium"},		
	        ],
	shows : [
			 { city: "Barcelona" }, 
			 { city: "Ciudad de Mexico" },
			 { city: "Miami" },
			 { city: "Madrid" },
			]
	})
);

for (i = 0; i < todosLosArtistas.length; i++) {
    
    todosLosArtistas[i].save( function(err, item) {
    
    	console.log(item.name + " fue guardado");
    
    });
}