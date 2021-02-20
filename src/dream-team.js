const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
	if(!Array.isArray(members)) {
		return false;
	}

	let teamName = [];
	let chars;
	members.forEach((i)=>{
		if(typeof i === 'string'){
			chars = i.replace(/ /g, '').toUpperCase();
			teamName.push(chars[0]);
		}
	});

	teamName.sort();

	return teamName.join('');

};
