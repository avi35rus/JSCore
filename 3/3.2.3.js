function incrementCounter(counterName){
	let counters = {};

	try {
		const countersData = localStorage.getItem('counters');
		if (countersData) {
			counters = JSON.parse(countersData);
		}
	} catch (error) {
		console.error('Error', error);
	}

	counters[counterName] = counters[counterName] ? counters[counterName] + 1 : 1;

	try {
		localStorage.setItem('counters', JSON.stringify(counters));
	} catch (error) {
		console.error('Error', error);
	}

	return counters[counterName]
}

console.log(incrementCounter('bannerClick')); // 1
console.log(incrementCounter('bannerClick')); // 2
console.log(incrementCounter('bannerClick')); // 3

console.log(incrementCounter('bannerClose'));
