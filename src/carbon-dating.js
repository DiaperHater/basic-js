const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

	if( 
		typeof sampleActivity != 'string' || 
		!Number(sampleActivity) || 
		sampleActivity > MODERN_ACTIVITY ||
		sampleActivity <= 0
	) {
		return false;
	} 

	sampleActivity = parseFloat(sampleActivity);

	const NATURAL_LOGARITHM_OF_2 = 0.693;
	const k = NATURAL_LOGARITHM_OF_2 / HALF_LIFE_PERIOD;
	const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;

	return Math.ceil(t);
};
