function arraysToCsv(data) {
	let symbols = [',', '\n', '"']

	const csvRows = data.map(arrElements => {
		const csvColumns = arrElements.map(elem => {
			if (typeof elem !== 'string' && typeof elem !== 'number') throw new Error ('Unexpected value')

			let elemStr = String(elem).replace(/"/g, '""')
			
			if (symbols.some(symbol => elemStr.includes(symbol))){
				elemStr = `"${elemStr}"`
			}

			return elemStr
		});

		return csvColumns.join(',');
	});

	return csvRows.join('\n')
}


console.log(arraysToCsv([[1, 'b'], ['"a", b', 'd']]))