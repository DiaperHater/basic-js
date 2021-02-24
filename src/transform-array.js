const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {


	if(arr.length == 0) {
		return [];
	}

	if(isArrSimple(arr) == true) {
		return arr;
	}

	newArr = arr.map((item, index) => {
		return {value: item, state: ''};
	});

	newArr.forEach((item, index)=>{
		if(item.value == '--discard-prev') {
			item.state = 'x';
			if(index-1 >= 0) {
				if(newArr[index-1].state == 'd'){
					newArr[index-1].state = '';
				} else {
					newArr[index-1].state = 'x';
				}
			}
			return ;
		}

		if(item.value == '--discard-next') {
			item.state = 'x';
			if(index+1 < newArr.length){
				newArr[index+1].state = 'x';
			}
			return ;
		}

		if(item.value == '--double-prev') {
			item.state = 'x';
			if(index-1 >= 0 && newArr[index-1].state != 'x') {
				newArr[index-1].state += 'd';

			}
			return ;
		}

		if(item.value == '--double-next') {
			item.state = 'x';
			if(index+1 < newArr.length){
				newArr[index+1].state = 'd';
			}
			return ;
		}
	});

	resultArr = [];

	newArr.forEach((i)=>{
		if(i.state == 'x') {
			return;
		}
		
		resultArr.push(i.value);
		if(i.state == 'd'){
			resultArr.push(i.value);
		} else if (i.state == 'dd') {
			resultArr.push(i.value);
			resultArr.push(i.value);
		}

	});

	return resultArr;

};


function isArrSimple (arr) {
	let simple = true;
	arr.forEach((i)=>{
		if(!isItemSimple(i)){
			simple = false;
		}
	});

	return simple;
}


function isItemSimple (item) {
	switch(item){
		case '--discard-next':
			return false;
		case '--discard-prev':
			return false;
		case '--double-next':
			return false;
		case '--double-prev':
			return false;

		default:
			return true;
	}
}