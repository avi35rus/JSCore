function replaceItemsClear(arr, item, replaceItem) {
	const arrCopy = Object.assign([], arr);

	for (let i = 0; i < arrCopy.length; i++) {
		if (arrCopy[i] === item) arrCopy[i] = replaceItem;
	}

	return arrCopy;
}

function replaceItemsMutate(arr, item, replaceItem) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) arr[i] = replaceItem;
	}

	return arr;
}