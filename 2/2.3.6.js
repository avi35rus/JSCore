class Addition {
    constructor (num) {
    	this.num = num;
    }
    
    add (...nums) {
    	const sum = (a, b) => a + b;
    	return this.num + nums.reduce(sum);
    }
}
// Write you code here
function logCalledDecorator(func) {
	return function(...args) {
		console.log('called')
		return func.apply(this, args);
	}
}

Addition.prototype.add = logCalledDecorator(Addition.prototype.add)