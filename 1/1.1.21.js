function wrapInParagraph(str){
	let value = str;
	let string = '';
	let result = '';
	
	for (let i = 0; i < value.length; i++) {
		if (value[i] !== '\n') {
			string += value[i];
		}

		if (value[i] === '\n' || i == value.length - 1) {
			if (!result) result = `<p>${string}</p>`;
			else result = result.concat('\n', `<p>${string}</p>`);
			string = '';
		}
	}

	return result 
}