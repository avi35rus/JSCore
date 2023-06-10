function invert (obj) {
	let objectToArr = Object.entries(obj);

	objectToArr.forEach(elem => elem.reverse());

	return Object.fromEntries(objectToArr)
}

console.log(invert({ a: 1, b: 2, c: 3 }))