Object.create = function(proto, propertiesObject) {
	if(typeof proto !== 'object') throw new TypeError('')
	
	const newObj = Object.setPrototypeOf({}, proto)

	if(typeof propertiesObject === 'object' && propertiesObject !== null) {
		Object.defineProperties(newObj, propertiesObject)
	}

	return newObj
};

const A = {
	objectName: 'Object A',
	getObjectName: function() {
		return `This is ${this.objectName}!`;
	},
};

const B = Object.create(A, {
	objectName: {
		value: 'Object B',
	},
});

console.log(A.getObjectName()); // This is Object A!
console.log(B.getObjectName()); // This is Object B!
console.log(A.hasOwnProperty('getObjectName')); // true
console.log(A.hasOwnProperty('objectName')); // true
console.log(B.hasOwnProperty('getObjectName')); // false
console.log(B.hasOwnProperty('objectName')); 
