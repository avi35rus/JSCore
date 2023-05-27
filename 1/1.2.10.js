function findAllIdx(arr, value) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			result.push(i);
		}
	}

	return result
}
