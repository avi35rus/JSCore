const inRange = (a, b) => {
	return function (values) {
		return values >= a && values < b
	}
};

const inArray = arr => {
	return function (values) {
		return arr.includes(values)
	}
};

const notInArray = arr =>  {
	return function (values) {
		return !arr.includes(values)
	}
};



let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(1,6)));
console.log(arr.filter(inArray([1, 2, 10, undefined])));
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true])));