const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
  	let depth = 0;
  	let temp = 0;

  	if(arr.length == 0) return 1;

  	arr.forEach( (item, index) => {
  		if(Array.isArray(item)) {
  			temp = this.calculateDepth(item);
  			if(temp > depth) depth = temp;
  		}
  	});

  	return 1 + depth;
  }
};