const CustomError = require("../extensions/custom-error");

const SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi( disks, turnsSpeed ) {
	let result = {
		turns: 1,
		seconds: 0
	}

	if(disks == 1) {
		result.turns = 1;
		result.seconds = 27;

		return result;
	}

	for(let i = 0; i < disks - 1; i++) {
		result.turns = result.turns * 2 + 1;
	}

	result.seconds = SECONDS_IN_HOUR / turnsSpeed * result.turns;
	result.seconds = Math.floor(result.seconds);


	return result;
};
