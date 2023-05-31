const hasArrays = (arr) => {
	let isArr = false;

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i]) === true) isArr = true
	}

	return isArr;
};

const data1 = [false, true, [], 1, 0, NaN];
console.log(hasArrays(data1));