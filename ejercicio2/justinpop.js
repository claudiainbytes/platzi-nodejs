var age = '21';

var state = 'single';

function sing(){
	console.log('Oh baby baby baby');
}

function cry(){
	console.log('buaaaaaaa');
}

function getArrested(){
	console.log('Oh no, I am in jail');
}

//Si no exportamos una propiedad o metodo asumimos que esta será privada
module.exports = {
	sing : sing,
	cry  : cry,
	getArrested : getArrested,
	state : state	
};