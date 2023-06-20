class Calc {
	constructor(count = 0) {
		this.res = count;
	}

	add(count) {
		return new Calc(this.res + count)
	}

	sub(count) {
		return new Calc(this.res - count)
	}

	result() {
		return this.res
	}
}

const calc = new Calc();
console.log(calc.add(10).sub(7).result());