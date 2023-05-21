const reverseLongWords = (str) => {
	let value = str;
	let word = '';
	let result = '';

	for (let i = 0; i < value.length; i++) {
		if (value[i] !== ' ') {
			word += value[i];
		} 
		if (value[i] === ' ' || i === value.length - 1) {
			if (word.length >= 5) {
				if (!result) result = word.split('').reverse().join('');
				else result = result.concat(' ', word.split('').reverse().join(''));
			} else {
				if (!result) result = word;
				else result = result.concat(' ', word);
			}
			word = '';
		}
	}

	return result;
};