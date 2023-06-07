// let value;

// value = String([1, 2, 3])
// value = String({ name: 'Vladimir' })

// value = true + 10
// value = []

// console.log(value)
// console.log(typeof value)




// const defaultTo = (value, defaultValue) => {
// 	if (value === undefined || value === null || isNaN(value)) {
// 		return defaultValue
// 	} else {
// 		return value
// 	}
// };

// console.log(compareWithPrecision (1 + 2, 5, 4))



// function compareWithPrecision(a, b, precision) {
// 	if (Math.abs(a - b) <= precision) {
// 		return true
// 	} else {
// 		return false
// 	}
// }	



// const reverseLongWords = (str) => {
// 	let value = str;
// 	let word = '';
// 	let result = '';

// 	for (let i = 0; i < value.length; i++) {
// 		if (value[i] !== ' ') {
// 			word += value[i];
// 		} 
// 		if (value[i] === ' ' || i === value.length - 1) {
// 			if (word.length >= 5) {
// 				if (!result) result = word.split('').reverse().join('');
// 				else result = result.concat(' ', word.split('').reverse().join(''));
// 			} else {
// 				if (!result) result = word;
// 				else result = result.concat(' ', word);
// 			}
// 			word = '';
// 		}
// 	}

// 	return result;
// };

// function wrapInParagraph(str){
// 	let value = str;
// 	let string = '';
// 	let result = '';
	
// 	for (let i = 0; i < value.length; i++) {
// 		if (value[i] !== '\n') {
// 			string += value[i];
// 		}

// 		if (value[i] === '\n' || i == value.length - 1) {
// 			if (!result) result = `<p>${string}</p>`;
// 			else result = result.concat('\n', `<p>${string}</p>`);
// 			string = '';
// 		}
// 	}

// 	return result 
// }

// const text2 = `some
// text
// count
// Hello
// what
// hi`;

// console.log(wrapInParagraph(text2));



// const lettersCount = (str) => {
// 	let strToLower = str.toLowerCase();
// 	let result = {};
// 	let meaning = strToLower[0];
// 	let meaningCount = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		if (meaning !== strToLower[i]) {
// 			meaning = strToLower[i];
// 			meaningCount = 0;
// 		}
// 		if (meaning === strToLower[i]) {
// 			meaningCount++;
// 			result[meaning] = meaningCount;
// 		}
// 	}

// 	return result
// };

// console.log(lettersCount('AaaAABbbCcccDddDDd'))

// function finalGrade(exam, projects) {
// 	if (exam > 90 || projects > 10) return 100;
// 	else if (exam > 75 && projects >= 5) return 90;
// 	else if (exam > 50 && projects >= 2) return 75;
// 	else return 0;
// }

//  console.log(finalGrade(55, 3));

// 1

// function fizzbuzz(number) {
// 	if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
//  	else if (number % 3 === 0) return 'Fizz'
// 	else if (number % 5 === 0) return 'Buzz'
// 	else return number
// }

// 2

// function fizzbuzz(number) {
// 	return number % 3 === 0 || number % 5 === 0 ? 'FizzBuzz' : number % 3 === 0 ? 'Fizz' : number % 5 === 0 ? 'Buzz' : number
// }

// const arithmetic = (a, b, operator) => {
// 	switch (operator) {
// 		case 'add':
// 			return a + b;
// 		case 'subtract':
// 			return a - b;
// 		case 'multiply':
// 			return a * b;
// 		case 'divide':
// 			return a / b;
// 		default:
// 			return NaN;
// 	}
// };


// function findAllIdx(arr, value) {
// 	let result = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === value) {
// 			result.push(i);
// 		}
// 	}

// 	return result
// }

// console.log(findAllIdx([1,0,1,0,0,1], 0))

// function replaceItemsClear(arr, item, replaceItem) {
// 	const arrCopy = Object.assign([], arr);

// 	for (let i = 0; i < arrCopy.length; i++) {
// 		if (arrCopy[i] === item) arrCopy[i] = replaceItem;
// 	}

// 	return arrCopy;
// }

// function replaceItemsMutate(arr, item, replaceItem) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === item) arr[i] = replaceItem;
// 	}

// 	return arr;
// }



// const moveToStart = (arr, n) => {
// 	const arrCopy = arr.slice();

// 	if (arrCopy.length <= n) return arrCopy

// 	return arrCopy.splice(arrCopy.length - n).concat(arrCopy);
// };

// console.log(moveToStart([1, 2, 3, 4, 5, 6, 7], 6));

// const hasArrays = (arr) => {
// 	let isArr = false;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (Array.isArray(arr[i]) === true) isArr = true
// 	}

// 	return isArr;
// };

// const data1 = [false, true, [], 1, 0, NaN];
// console.log(hasArrays(data1));

// const getNumbersByParity = (data, parity) => {
// 	const arrCopy = data.slice();
// 	switch (parity) {
// 		case 'even':
// 			return arrCopy.filter(elem => elem % 2 === 0);
// 		case 'odd':
// 			return arrCopy.filter(elem => elem % 2 !== 0);
// 		default:
// 			return []	
// 	}

// };

// const data = [1, 2, 3, 4, 5, 6];
// console.log(getNumbersByParity(data, 'even'));

// let value = 0;

// function func(arr, sum) {
// 	sum += arr.shift();

// 	if (arr.length != 0) {
// 		sum = func(arr, sum);
// 	}

// 	return sum
// }

// console.log(func([1,2,3], 0))

// function func(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (Array.isArray(arr[i]) === true) {
// 			func(arr[i])
// 		} else {
// 			arr[i] = arr[i] + '!'
// 		}
// 	}

// 	return arr
// }

// const array = [1, 2, 3, [4, 5], [6, 7, [8, 9, [10, 11]]]]

// console.log(func(array))

// function sequenceSum (begin, end) {
// 	if (begin > end) return NaN
// 	else if (begin === end) return begin
// 	else return begin + sequenceSum (begin += 1, end)
// }

// console.log(sequenceSum(-3, 3))


// function getStringCount(object, sum = 0) {
	
// 	for (let key in object) {
// 		if (typeof object[key] === 'object' && object[key] !== null) {
// 			sum = getStringCount(object[key], sum)
// 		} else if (typeof object[key] === 'string') {
// 			sum += 1
// 		}
// 	}

// 	return sum
// }

// const obj = [1,2,3]

// console.log(getStringCount
// ([1, 2, 3, null, undefined, NaN]))

// function optionalChaining (obj, chain, i = 0) {
// 	if (chain.length === 0) return undefined;

// 	if (typeof obj === 'object' && obj !== null && chain[i] in obj) {
// 	  return optionalChaining(obj[chain[i]], chain, i + 1);
// 	}

// 	if (i < chain.length) return undefined;
// 	return obj;
// }

// const obj = {
// 	a: {
// 		b: {
// 			c: {
// 				d: {

// 				}
// 			}
// 		}
// 	}
// }

// console.log(optionalChaining(obj, ["a", "b", "c", "d"]))


// function partition (array, callback = (element) => element) {
// 	const arrCopy = array.slice()
// 	const trueArray = []
// 	const falseArray = []

// 	for (let i = 0; i < arrCopy.length; i++) {
// 		if (callback(arrCopy[i])) trueArray.push(arrCopy[i])
// 		if (!callback(arrCopy[i])) falseArray.push(arrCopy[i])
// 	}

// 	return [trueArray, falseArray]
// }

// const users = [
// 	{ 
// 		'user': 'barney',  
// 		'age': 36, 
// 		'active': false 
// 	},

// 	{ 
// 		'user': 'fred',    
// 		'age': 40, 
// 		'active': true 
// 	},

// 	{ 
// 		'user': 'pebbles', 
// 		'age': 1,  
// 		'active': false 
// 	}
//   ];
   
// console.log(partition(users, (element) => element.active ));

// function makeCounter() {
// 	let count = 0;

// 	return function() {
		
// 		console.log(count += 1)
// 	}
// }


// const once = fn => {
// 	let value = true

// 	return function() {
// 		if(value) {
// 			fn()
// 			value = false
// 		}
// 	};
// };

// const f = () => console.log('hi!');
// const onceF = once(f);

// onceF();
// onceF();


// const inRange = (a, b) => {
// 	return function (values) {
// 		return values >= a && values < b
// 	}
// };

// const inArray = arr => {
// 	return function (values) {
// 		return arr.includes(values)
// 	}
// };

// const notInArray = arr =>  {
// 	return function (values) {
// 		return !arr.includes(values)
// 	}
// };



// let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

// console.log(arr.filter(inRange(1,6)));
// console.log(arr.filter(inArray([1, 2, 10, undefined])));
// console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true])));

// const createObjectCalculator = (initialA, initialB) => {
// 	const obj = {
// 		a: initialA,
// 		b: initialB,

// 		read (x, y) {
// 			this.a = x;
// 			this.b = y;
// 		},
// 		sum () {
// 			return this.a + this.b;
// 		},
// 		mul: function () {
// 			return this.a * this.b;
// 		}
// 	}

// 	return obj
// };

// const calculator = createObjectCalculator(6, 3);
// console.log(calculator.sum()); // 2 + 3 = 5
// console.log(calculator.mul()); // 2 * 3 = 6

// calculator.read(12, 34);
// console.log(calculator.sum()); // 2 + 3 = 5
// console.log(calculator.mul()); // 2 * 3 = 6


// const getField = (data, field) => {
// 	if(!Array.isArray(data)) {
// 		return []
// 	}

// 	const arrCopy = data.slice();

// 	const arrRes = arrCopy.map(elem => elem[field]);

// 	return arrRes;
// };

// const data = [
// 	{
// 	  name: 'Denis',
// 	  age: 25,
// 	},
// 	{
// 	  name: 'Ivan',
// 	},
// 	{
// 	  name: 'Ann',
// 	  age: 18,
// 	},
//   ];
  
//   console.log(getField('age'));


// const createUsernames = users => {
// 	let currentDate = new Date;

// 	users.reduce((acc, user) => {
// 		user.username = user.firstName.toLowerCase() + user.lastName.toLowerCase()[0] + (currentDate.getFullYear() - user.age);
// 	}, 0);
	
// 	return users
// };

// const data = [
// 	{ 
// 		firstName: 'Emily', 
// 		lastName: 'N.', 
// 		country: 'Ireland', 
// 		continent: 'Europe', 
// 		age: 30, 
// 		language: 'Ruby' 
// 	},
// 	{ 
// 		firstName: 'Nor', 
// 		lastName: 'E.', 
// 		country: 'Malaysia', 
// 		continent: 'Asia', 
// 		age: 20, 
// 		language: 'Clojure' 
// 	}
// 	];

// const processedData = createUsernames(data);
// console.log(processedData); // [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];

// const calculatePrice = (orders) => {
// 	if(!orders) return 0
// 	return orders.reduce((acc, product) => {
// 		acc += product.price;
// 		return acc;
// 	}, 0);
// };

// const data = [
// 	{
// 		type: 'food',
// 		price: 130,
// 	},
// 	{
// 		type: 'clothes',
// 		price: 7300,
// 	},
// 	{
// 		type: 'other',
// 		price: 1400,
// 	},
// ];

// console.log(calculatePrice(data));

