const moveToStart = (arr, n) => {
	const arrCopy = arr.slice();

	if (arrCopy.length <= n) return arrCopy

	return arrCopy.splice(arrCopy.length - n).concat(arrCopy);
};

console.log(moveToStart([1, 2, 3, 4, 5, 6, 7], 6));