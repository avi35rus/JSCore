const lettersCount = (str) => {
	let strToLower = str.toLowerCase();
	let result = {};
	let meaning = strToLower[0];
	let meaningCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (meaning !== strToLower[i]) {
			meaning = strToLower[i];
			meaningCount = 0;
		}
		if (meaning === strToLower[i]) {
			meaningCount++;
			result[meaning] = meaningCount;
		}
	}

	return result
};