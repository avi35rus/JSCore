const sum = (...rest) => {
	return rest.reduce((acc, elem) => {
		if (!isNaN(Number(elem))) acc += Number(elem)
		return acc
	}, 0)
};

console.log(
    sum(1, 2, 3, 4, 5, 6),
);

console.log(
    sum(-10, 15, 100),
);

console.log(
    sum(),
);

console.log(
    sum(1, '1', 'fqwfqwf', {}, [], 3, 4, 2, true, false),
);