var madonna = require('./mymodulo');
var justin  = require('./justinpop');

module.exports = {
	madonna : madonna,
	justin  : justin,
	shakira : {
		name 	: 'Shakira',
		songs 	: [
				  'Loba',
				  'Loca',
				  'Las de la intuicion'
				  ],
		conciertos: ['Bogotá',
				     'Medellín',
				     'Cali'
				    ]		  
	}
};