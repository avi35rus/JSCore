const getNumbersByParity = (data, parity) => {
	const arrCopy = data.slice();
	switch (parity) {
		case 'even':
			return arrCopy.filter(elem => elem % 2 === 0);
		case 'odd':
			return arrCopy.filter(elem => elem % 2 !== 0);
		default:
			return []	
	}

};

const data = [1, 2, 3, 4, 5, 6];
console.log(getNumbersByParity(data, 'even'));