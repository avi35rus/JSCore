// function incrementCounter(counterName){
// 	let counters = {};

// 	try {
// 		const countersData = localStorage.getItem('counters');
// 		if (countersData) {
// 			counters = JSON.parse(countersData);
// 		}
// 	} catch (error) {
// 		console.error('Error', error);
// 	}

// 	counters[counterName] = counters[counterName] ? counters[counterName] + 1 : 1;

// 	try {
// 		localStorage.setItem('counters', JSON.stringify(counters));
// 	} catch (error) {
// 		console.error('Error', error);
// 	}

// 	return counters[counterName];
// }

// console.log(incrementCounter('bannerClick')); // 1


// console.log(incrementCounter('bannerClose'));

// console.log(localStorage.getItem('counters'))

// class AttemptsLimitExceeded extends Error {
// 	constructor(){
// 		super('Max attempts limit exceed');
// 		this.name = 'AttemptsLimitExceeded';
// 	}
// }
  
// class NotFoundError extends Error {
// 	constructor(){
// 		super('Not found');
// 		this.name = 'NotFoundError';
// 	}
// }

// class TemporaryError extends Error {
// 	constructor(){
// 		super('TemporaryError');
// 		this.name = 'TemporaryError';
// 	}
// }

// function getRepeatableData(getData, key, maxRequestsNumber) {
// 	let counter = 0;

// 	while (maxRequestsNumber === undefined || maxRequestsNumber > counter) {
// 		try {
// 			return getData(key);
// 		} 
// 		catch (error) {
// 			if (error instanceof NotFoundError) {
// 				throw error;
// 			}
// 			else if (error instanceof TemporaryError) {
// 				counter++;
// 				continue;
// 			}
// 			else {
// 				throw error;
// 			}
// 		}
// 	}

// 	throw new AttemptsLimitExceeded('')
// }

// function trackPageVisit(url) {
// 	let counters = {};

// 	const countersData = localStorage.getItem('pageVisits')
// 	if (countersData) {
// 		counters = JSON.parse(countersData)
// 	}

// 	counters[url] = counters[url] ? counters[url] + 1 : 1;

// 	localStorage.setItem('pageVisits', JSON.stringify(counters))

// 	return counters[url]
// }


// let fileSizes = {
// 	testFile1: 65,
// 	testFile2: 48,
// }
  
// function getFileSize(filename, cb) {
// 	setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
// }
  
// function sumFileSizes(filename1, filename2, cb) {
// 	let sum = 0;
// 	let count = 0;

// 	function acceptFileSize(size) {
// 		sum += size;
// 		count++;

// 		if(count === 2) {
// 			cb(sum);
// 		}
// 	}

// 	getFileSize(filename1, acceptFileSize)
// 	getFileSize(filename2, acceptFileSize)
// }

// const { getUserInfo, getUsersIds } = db;

// function getUsersInfo(onLoad) {
// 	getUsersIds((ids) => {
// 		const usersMap = new Map();
// 		let count = 0;

// 		ids.forEach((id) => {
// 			getUserInfo(id, (userInfo) => {
// 				users.set(id, userInfo);
// 				count++;

// 				if(count === ids.length) {
// 					const users = ids.map(id => usersMap.get(id))
// 					onLoad(users);
// 				}
// 			});
// 		});
// 	});
// }

// bar();

// let bar = function() {
//   console.log("Привет, я функция bar!");
// // };

// const throttle = (fn, throttleTime) => {
// 	let isWaiting = false;

// 	return function wrapperFn (...args) {
// 		if(!isWaiting) {
// 			isWaiting = true;
// 			fn.apply(this, args);
		
// 			setTimeout(() => {
// 				isWaiting = false;
// 			}, throttleTime);
// 		};
// 	};
// };

// const debounce = (fn, debounceTime) => {
// 	let timeout;
// 	return function (...args) {
// 		clearTimeout(timeout)
// 		timeout = setTimeout(() => {
// 			fn.apply(this, args);
// 		}, debounceTime)
// 	};
// };

// function foo1() {
// 	foo2();
// 	console.log('foo1')
// };

// function foo2() {
// 	console.log('foo2')
// 	foo3();
// };

// function foo3() {
// 	throw new Error('Ошибка')
// };

// try {
// 	foo1()
// } catch {
// 	console.error("error")
// }

// console.log('Привет')

console.log(elem.getAttribute('aBout'))
elem.setAttribute('test', '123')
console.log(elem.outerHTML)
console.log(elem.attributes)
for (let attr of elem.attributes) { // (4) весь список
	alert( `${attr.name} = ${attr.value}` );
  }