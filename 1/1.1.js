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

function wrapInParagraph(str){
	let value = str;
	let string = '';
	let result = '';
	
	for (let i = 0; i < value.length; i++) {
		if (value[i] !== '\n') {
			string += value[i];
		}

		if (value[i] === '\n' || i == value.length - 1) {
			if (!result) result = `<p>${string}</p>`;
			else result = result.concat('\n', `<p>${string}</p>`);
			string = '';
		}
	}

	return result 
}

const text2 = `some
text
count
Hello
what
hi`;

console.log(wrapInParagraph(text2));