function capitalize(str){
	let value = str.toLowerCase();

	if (value[0] !== ' ') {
		value = value[0].toUpperCase() + value.slice(1);
	}

	for (let i = 0; i < value.length; i++) {
		if (value[i] === ' ') {
			value = value.slice(0, i + 1) + value[i + 1].toUpperCase() + value.slice(i + 2);
		}
	}

	return value
}