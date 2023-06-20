// function invert (obj) {
// 	let objectToArr = Object.entries(obj);

// 	objectToArr.forEach(elem => elem.reverse());

// 	return Object.fromEntries(objectToArr)
// }

// console.log(invert({ a: 1, b: 2, c: 3 }))

// function comparisonObject (obj1, obj2) {
// 	let result = true

// 	for (const key in obj1) {
// 		if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
// 			result = comparisonObject(obj1[key], obj2[key])
// 		}
// 		else if (obj1[key] !== obj2[key]) return obj1[key] === obj2[key]
// 	}

// 	return result
// }

// function deepEqual (obj1, obj2) {
// 	if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null) {
// 		return comparisonObject (obj1, obj2) && comparisonObject (obj2, obj1)
// 	}

// 	return obj1 === obj2
// }

// const firstObject = {
// 	a: {
// 		b: {
// 			b: 6,
// 			c: 1,
// 			d: 'string',
// 			e: {
// 				num: 1
// 			}
// 		}
// 	}
// };

// const secondObject = {
// 	a: {
// 		b: {
// 			b: 6,
// 			e: {
// 				num: 1,
// 			},
// 			d: 'string',
// 			c: 1,
// 		}
// 	}
// };

// console.log(deepEqual(firstObject, secondObject))

// const sum = (...rest) => {
// 	return rest.reduce((acc, elem) => {
// 		if (!isNaN(Number(elem))) acc += Number(elem)
// 		return acc
// 	}, 0)
// };

// console.log(
//     sum(1, 2, 3, 4, 5, 6),
// );

// console.log(
//     sum(-10, 15, 100),
// );

// console.log(
//     sum(),
// );

// console.log(
//     sum(1, '1', 'fqwfqwf', {}, [], 3, 4, 2, true, false),
// );

// const merge = (...value) => {
// 	return Object.assign({}, ...value)
// }

// console.log(
// 	merge(
// 	  {
// 		name: 'John',
// 		age: 22,
// 	  },
// 	  {
// 		surname: 'Klein',
// 		age: 20,
// 		profession: 'student',
// 	  },
// 	  {
// 		profession: 'frontend developer',
// 		country: 'USA',
// 	  }
// 	)
//   );

// const getLanguagesStatistic = (feedbacks) => {
// 	return feedbacks.reduce((acc, elem) => {
// 		const {language, year} = elem
// 		if (year === 2019) {
// 			acc[language] = isNaN(acc[language]) ? 1 : acc[language] += 1
// 		}
// 		return acc
// 	}, {})
// };

// const data = [
// 	{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
// 	{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
// 	{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },

// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
// 	{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
// 	{ firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
// 	{ firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
// 	{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
// ]

// console.log(getLanguagesStatistic(data));

// const getArraysCounts = (arr) => {
// 	const map = new Map();

// 	arr.forEach(elem => map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1));
	
// 	return map
// };

// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data);

// console.log(counts)
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj));

// const unique = (arr) => {
// 	return [...(new Set(arr))]
// };

// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]

// const obj = { name: 'John' };
// const data2 = [obj, obj, obj, { name: 'John' }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false

// const getDaysBetweenDates = (...dates) => {
// 	let [firstDate, secondDate] = dates;
// 	const millisecondInDay = 24 * 60 * 60 * 1000;
	
// 	if (typeof firstDate !== 'number' && firstDate !== null) firstDate = Date.parse(firstDate);
// 	if (typeof secondDate !== 'number' && secondDate !== null) secondDate = Date.parse(secondDate);
// 	if (firstDate === null) firstDate = new Date(null)
// 	if (secondDate === null) secondDate = new Date(null)

// 	if (dates.length < 2) throw new TypeError();

// 	let result = Math.floor((secondDate - firstDate) / millisecondInDay);

// 	return result < 0 ? result + 1 : result
// };

// console.log(getDaysBetweenDates(1409796000000, null))

// const obj = {
// 	name: 'Vladimir',
// }

// const strObj = new Object('abc')
// let str = strObj.toUpperCase()

// // console.log(strObj)

// function Auto (brand, price) {
// 	this.brand = brand,
// 	this.price = price
// }

// Auto.prototype.lowPrice = function () {
// 	this.price = this.price - 100000
// 	return this.price
// }

// function lowPrice () {
// 	this.price = this.price - 100000
// 	return this.price
// }

// Auto.__proto__ = lowPrice

// const bmw = new Auto('BMW', 1000000)
// const mercedes = new Auto('Mercedes', 3000000)

// console.log(bmw)



// console.log(mercedes)

// const hasArrays = (arr) => {
// 	return arr.some(elem => Array.isArray(elem))
// };

// const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(hasArrays(data1)); 

// const data2 = [];
// console.log(hasArrays(data2));


// let user = {
// 	name: "John",
// 	surname: "Smith",
  
// 	set fullName(value) {
// 	  [this.name, this.surname] = value.split(" ");
// 	},
  
// 	get fullName() {
// 	  return `${this.name} ${this.surname}`;
// 	}
//   };
  
//   let admin = {
// 	__proto__: user,
// 	isAdmin: true
//   };

//   console.log(admin.fullName)

//   admin.fullName = "Alice Cooper"

//   console.log(admin)

// function isEmpty(obj) {
// 	return Boolean(!Object.keys(obj).length)
// }

// function isEmptyWithProtos(obj) {
// 	for (const key in obj) return Boolean(!obj[key])
	
// 	return true
// }

// const protoObj = Object.create({"ma" : 1});
// const obj = Object.create(protoObj);
// console.log(isEmptyWithProtos(obj))
// console.log(isEmptyWithProtos({}));

// function Book(name, author, year) {
// 	this.name = name;
// 	this.author = author;
// 	this.year = year;
// 	this.reader = null;
// };

// let commands = {
// 	isAvailable() {
// 		return this.reader ? false : true
// 	},

// 	takeBook(readerName) {
// 		if(!this.reader) {
// 			this.reader = readerName
// 			return true
// 		}
// 		else return false
// 	},

// 	returnBook() {
// 		if(this.reader) {
// 			this.reader = null
// 			return true
// 		}
// 		else return false
// 	},

// 	changeBookName(newBookName) {
// 		if (this.name !== newBookName) {
// 			this.name = newBookName
// 			return true
// 		}
// 		else return false
		
// 	},

// 	changeAuthorName(newAuthorName) {
// 		if (this.author !== newAuthorName) {
// 			this.author = newAuthorName
// 			return true
// 		}
// 		else return false
// 	},

// 	getCurrentReader() {
// 		return this.reader
// 	}
// }

// Book.prototype = commands;

// let bookOne = new Book('Книга 1', 'Автор 1', '2023')
// let bookTwo = new Book('Книга 2', 'Автор 2', '2023')

// const arrOne = [1, 2, 3, 4, 5, 6, 7, 8]
// const arrTwo = [6, 2, 1]
// const objOne = {
// 	name: 111,
// 	fn () {
// 		console.log(`name ${this.name}`)
// 	}
// }

// const objTwo = {
// 	name: 222
// }

// console.log(objOne.fn())

// objOne.fn.bind(objTwo)()
// objOne.fn.call(objTwo)
// objOne.fn.apply(objTwo)


// // const multArr = (arr, n) => arr.map(elem => elem * n)

// Array.prototype.multArr = function(n) {
// 	return this.map(elem => elem * n)
// }

// const someFn = (callback) => {
// 	callback(); // любая функция/метод, переданная сюда, будет вызвана без точки слева,
// 	// т.е. не от имени объекта. Это означает, что её контекст будет утерян
// };

// const obj = {
// 	method: function() {
// 		console.log(this);
// 	},
// };

// someFn(() => obj.method()) 
// const obj = {
// 	// <-- контекст метода fn будет равен obj1,
// 	// если вызвать этот метод через точку (obj1.fn())
// 	fn1() {
// 	  // <-- контекст стрелочной функции будет определен этой функцией,
// 	  // т.к. она является ближайшей для него функцией
// 	  return {
// 		fn2: () => {
// 		  // функция возьмет контекст ближайшей внешней функции
// 		  console.log(this);
// 		},
// 	  };
// 	},
//   };
  
//   console.log(obj.fn1().fn2())

// class Addition {
// 	constructor (num) {
// 		this.num = num;
// 	}
		
// 	add (...nums) {
// 		const sum = (a, b) => a + b;
// 		return this.num + nums.reduce(sum);
// 	}
// }

// function logCalledDecorator(func) {
// 	return function(...args) {
// 		console.log('called')
// 		return func.apply(this, args);
// 	}
// }


// Addition.prototype.add = logCalledDecorator(Addition.prototype.add)

// const startedValue = new Addition(5);
// const result = startedValue.add(3,5,6)
// console.log(result)

// console.log(startedValue)

// Object.create = function(proto, propertiesObject) {
// 	if(typeof proto !== 'object') throw new TypeError('')
	
// 	const newObj = Object.setPrototypeOf({}, proto)

// 	if(typeof propertiesObject === 'object' && propertiesObject !== null) {
// 		Object.defineProperties(newObj, propertiesObject)
// 	}

// 	return newObj
// };

// const A = {
// 	objectName: 'Object A',
// 	getObjectName: function() {
// 		return `This is ${this.objectName}!`;
// 	},
// };

// const B = Object.create(A, {
// 	objectName: {
// 		value: 'Object B',
// 	},
// });

// console.log(A.getObjectName()); // This is Object A!
// console.log(B.getObjectName()); // This is Object B!
// console.log(A.hasOwnProperty('getObjectName')); // true
// console.log(A.hasOwnProperty('objectName')); // true
// console.log(B.hasOwnProperty('getObjectName')); // false
// console.log(B.hasOwnProperty('objectName')); 

// class Person {
// 	constructor(firstName, lastName, birthday) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.birthday = birthday;
// 	}

// 	getAge() {
// 		const today = new Date();
// 		const birthDate = new Date(this.birthday);

// 		let age = today.getFullYear() - birthDate.getFullYear();

// 		const monthDiff = today.getMonth() - birthDate.getMonth();

// 		if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--
		
// 		return age
// 	}

// 	get fullName() {
// 		return `${this.firstName} ${this.lastName}`
// 	}
// }
// class Account {
// 	constructor(person, balance) {
// 		this.person = person;
// 		this.balance = balance;
// 		this.transactions = [];
// 	}

// 	addMoney(amount, description) {
// 		this.balance += amount;
// 		this.transactions.push({
// 			timestamp: new Date().getTime(),
// 			target: 'in',
// 			amount: amount,
// 			description: description
// 		})
// 	}

// 	withdrawMoney(amount, description) {
// 		this.balance -= amount;
// 		this.transactions.push({
// 			timestamp: new Date().getTime(),
// 			target: 'out',
// 			amount: amount,
// 			description: description
// 		})
// 	}

// 	getAmount() {
// 		return this.balance
// 	}

// 	getAccountHistory() {
// 		return this.transactions
// 	}

// 	static transfer(fromAccount, toAccount, amount) {
// 		fromAccount.balance -= amount
// 		toAccount.balance += amount

// 		fromAccount.transactions.push({
// 			timestamp: new Date().getTime(),
// 			target: 'out',
// 			amount: amount,
// 			description: null
// 		})

// 		toAccount.transactions.push({
// 			timestamp: new Date().getTime(),
// 			target: 'in',
// 			amount: amount,
// 			description: null
// 		})
// 	}
// }

// const alex = new Person('Alexey', 'Petrov', '1994-05-22');
// const alexAccount = new Account(alex, 1000);
// const helen = new Person('Helen', 'Smith', '1990-06-06');
// const helenAccount = new Account(helen, 400);

// alexAccount.addMoney(1000, 'Зарплата');
// const amount = alexAccount.getAmount();
// alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
// Account.transfer(alexAccount, helenAccount, 300);
// console.log(helenAccount.getAmount()); // 500
// console.log(alexAccount.getAmount()); // 1700

// console.log(alexAccount.transactions)

// class Calc {
// 	constructor(count = 0) {
// 		this.res = count;
// 	}

// 	add(count) {
// 		return new Calc(this.res + count)
// 	}

// 	sub(count) {
// 		return new Calc(this.res - count)
// 	}

// 	result() {
// 		return this.res
// 	}
// }

// const calc = new Calc();
// console.log(calc.add(10).sub(7).result());

// class EventEmitter {
// 	constructor() {
// 		this.events = {};
// 	}

// 	on(eventName, callback) {
// 		if(!this.events[eventName]) {
// 			this.events[eventName] = [];
// 		}
// 		this.events[eventName].push(callback);
// 	}

// 	off(eventName, callback) {
// 		if(this.events[eventName]) {
// 			this.events[eventName] = this.events[eventName].filter(elem => elem !== callback);
// 		}
// 	}

// 	once(eventName, callback) {
// 		const onceCallback = (...args) => {
// 			callback(...args);
// 			this.off(eventName, onceCallback);
// 		};
// 		this.on(eventName, onceCallback);
// 	}

// 	emit(eventName, ...args) {
// 		if(this.events[eventName]) {
// 			this.events[eventName].forEach(elem => elem(...args));
// 		}
// 	}
// }

// class BroadcastEventEmitter extends EventEmitter {
// 	emit(eventName, ...args) {
// 		for (const key in this.events) {
// 			this.events[key].forEach(elem => elem(...args));
// 		}
// 	}
// }


// class Samurai {
// 	constructor(name) {
// 		this.name = name
// 	}
// 	hello() {
// 		alert(this.name)
// 	}
// }

