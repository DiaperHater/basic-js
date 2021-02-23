const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
	
	if(typeof date === 'undefined') {
		return 'Unable to determine the time of year!';
	}

	checkArg(date);

	const winter = 'winter';
	const spring = 'spring';
	const summer = 'summer';
	const autumn = 'autumn';

	if(isWinter(date)){
		return winter;
	}
	if(isSpring(date)){
		return spring;
	}
	if(isSummer(date)){
		return summer;
	}
	if(isAutumn(date)){
		return autumn;
	}

	return false;

};

function isAutumn(date) {
	if( 
		date.getMonth() == 8  || 
	 	date.getMonth() == 9 ||
	 	date.getMonth() == 10
	 ){
		return true;
	}

	return false;
}

function isSummer(date) {
	if( 
		date.getMonth() == 5  || 
	 	date.getMonth() == 6 ||
	 	date.getMonth() == 7
	 ){
		return true;
	}

	return false;
}

function isSpring(date) {
	if( 
		date.getMonth() == 2  || 
	 	date.getMonth() == 3 ||
	 	date.getMonth() == 4
	 ){
		return true;
	}

	return false;
}


function isWinter(date) {
	if( 
		date.getMonth() == 11  || 
	 	date.getMonth() == 0 ||
	 	date.getMonth() == 1
	 ){
		return true;
	}

	return false;
}

function checkArg( a ) {

	if( !(a instanceof Date) ){
		throw new Error(' Argument of wrong type !');
	}

	try {
		//check is arg fake 
		a.setDate(a.getDate());
	} catch(e) {
		throw e;
	}
}
