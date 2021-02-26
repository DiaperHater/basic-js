const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if(options.addition === null) {
		options.addition = String(options.addition);
	}
	if(!options.additionRepeatTimes) {
		options.additionRepeatTimes = 1;
	}
	let addition = mult(options.addition, options.additionRepeatTimes);

	if(!options.additionSeparator) {
		options.additionSeparator = '|';
	}
	addition = insertSeparator(addition, options.additionSeparator);

	str += addition;

	if(!options.repeatTimes) {
		options.repeatTimes = 1;
	}
	str = mult(str, options.repeatTimes);

	if(!options.separator) {
		options.separator = '+';
	}
	str = insertSeparator(str, options.separator);


	return str;
};
  

function insertSeparator(arr, sep) {
	for(i = 0; i < arr.length; i++) {
		if(i % 2 != 0) {
			arr.splice(i, 0, sep);
		}
	}

	return arr.join('');
}

function mult(s, n) {
	let arr = [];

	for(i = 0; i < n; i++) {
		arr.push(s);
	}

	return arr;
}