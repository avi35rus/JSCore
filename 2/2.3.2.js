function isEmpty(obj) {
	return Boolean(!Object.keys(obj).length)
}

function isEmptyWithProtos(obj) {
	for (const key in obj) return Boolean(!obj[key])
	
	return true
}

const protoObj = Object.create({"ma" : 1});
const obj = Object.create(protoObj);
console.log(isEmptyWithProtos(obj))
console.log(isEmptyWithProtos({}));