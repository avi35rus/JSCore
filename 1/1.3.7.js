function partition (array, callback = (element) => element) {
	const arrCopy = array.slice()
	const trueArray = []
	const falseArray = []

	for (let i = 0; i < arrCopy.length; i++) {
		if (callback(arrCopy[i])) trueArray.push(arrCopy[i])
		if (!callback(arrCopy[i])) falseArray.push(arrCopy[i])
	}

	return [trueArray, falseArray]
}