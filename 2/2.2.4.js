const getDaysBetweenDates = (...dates) => {
	let [firstDate, secondDate] = dates;
	const millisecondInDay = 24 * 60 * 60 * 1000;
	
	if (typeof firstDate !== 'number' && firstDate !== null) firstDate = Date.parse(firstDate);
	if (typeof secondDate !== 'number' && secondDate !== null) secondDate = Date.parse(secondDate);
	if (firstDate === null) firstDate = new Date(null)
	if (secondDate === null) secondDate = new Date(null)

	if (dates.length < 2) throw new TypeError();

	let result = Math.floor((secondDate - firstDate) / millisecondInDay);

	return result < 0 ? result + 1 : result
};

console.log(getDaysBetweenDates(1409796000000, null))