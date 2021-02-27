const CustomError = require("../extensions/custom-error");
const alphabet = offsetAlphabet(0);
const square = buildSquare();
const decriptSquare = buildDecriptSquare();

class VigenereCipheringMachine {
 	
 	reversed = false;

 	constructor(reversed) {
 		if(reversed === false) {
	 		this.reversed = true;
 		}
 	}

  encrypt(str, key) {
    
    if(!str || !key) {
    	throw new Error('Missed parameter!');
    }

    str = str.toUpperCase();
    key = key.toUpperCase();

    let msg = [];

    let noSpaces = str.split(' ').join('');
    noSpaces.split('').forEach((char, index) => {
    	if(alphabet.includes(char)){
    		msg.push(square.get(key[index % key.length]).get(char));
    	} else {
    		msg.push(char);
    	}
    });

    str.split('').forEach((char, index) => {
    	if(char === ' ') {
    		msg.splice(index, 0, ' ');
    	}
    });

    if(this.reversed){
    	msg.reverse();
    }
    return msg.join('');
  }  

	decrypt(str, key) {
    
		if(!str || !key) {
			throw new Error('Missed parameter!');
		}

		// if(this.reversed){
	 //    	str = str.split('').reverse().join('');
	 //    }

		str = str.toUpperCase();
		key = key.toUpperCase();

		let msg = [];

		let noSpaces = str.split(' ').join('');
		noSpaces.split('').forEach((char, index) => {
			if(alphabet.includes(char)){
				msg.push(decriptSquare.get(key[index % key.length]).get(char));
			} else {
				msg.push(char);
			}
		});

		str.split('').forEach((char, index) => {
			if(char === ' ') {
				msg.splice(index, 0, ' ');
			}
		});

		if(this.reversed){
	    	msg.reverse();
	    }
		return msg.join('');

	}
}

function buildDecriptSquare(){
	const alphabet = offsetAlphabet(0);

	let square = new Map();
	for (let i = 0; i < 26; i++) {
		let c = alphabet[i];
		square.set(c, new Map());
	}


	for(let i = 0; i < 26; i++) {
		let alphabetWithOffset = offsetAlphabet(i);

		for (let z = 0; z < 26; z++) {
			square.get(alphabet[i]).set(alphabetWithOffset[z], alphabet[z]);
		}
	};

	return square;
}

function buildSquare(){
	const alphabet = offsetAlphabet(0);

	let square = new Map();
	for (let i = 0; i < 26; i++) {
		let c = alphabet[i];
		square.set(c, new Map());
	}


	for(let i = 0; i < 26; i++) {
		let alphabetWithOffset = offsetAlphabet(i);

		for (let z = 0; z < 26; z++) {
			square.get(alphabet[i]).set(alphabet[z], alphabetWithOffset[z]);
		}
	};

	return square;
}

function offsetAlphabet(n) {
	const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	arr = [];
	arr.push(alpha[n]);
	for (let y = n+1; y % 26 != n; y++) {
		if(y == 26) y = 0;
		arr.push(alpha[y]);
	}

	return arr;
}


module.exports = VigenereCipheringMachine;
