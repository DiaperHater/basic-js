

console.log(buildSquare());


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


