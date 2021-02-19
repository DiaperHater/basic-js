const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	let count = 0;
	arr.forEach(d1=>{
		d1.forEach(item=>{
			if(item == '^^') {
				count++;
			}
		})
	})

	return count;
};
