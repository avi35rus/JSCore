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

