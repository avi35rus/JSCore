function getStringCount(object, sum = 0) {
	
	for (let key in object) {
		if (typeof object[key] === 'object' && object[key] !== null) {
			sum = getStringCount(object[key], sum)
		} else if (typeof object[key] === 'string') {
			sum += 1
		}
	}

	return sum
}