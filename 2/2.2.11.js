const getArraysCounts = (arr) => {
	const map = new Map();

	arr.forEach(elem => map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1));
	
	return map
};

const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data);

console.log(counts)
console.log(counts.get(1)); // 3
console.log(counts.get(2)); // 4
console.log(counts.get(true)); // 2
console.log(counts.get(obj));