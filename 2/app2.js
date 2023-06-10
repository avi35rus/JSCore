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
// 		else if (obj1[key] !== obj2[key]) {
// 			return obj1[key] === obj2[key]
// 		}
// 	}

// 	return result
// }

// function deepEqual (obj1, obj2) {
// 	let firstValue
// 	let secondValue

// 	if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null) {
// 		firstValue = comparisonObject (obj1, obj2)
// 		secondValue = comparisonObject (obj2, obj1)
// 	}

// 	if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return obj1 === obj2

// 	if (!firstValue || !secondValue) return false

// 	else return true
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

