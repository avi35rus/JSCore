const createObjectCalculator = (initialA, initialB) => {
	const obj = {
		a: initialA,
		b: initialB,

		read (x, y) {
			this.a = x;
			this.b = y;
		},
		sum () {
			return this.a + this.b;
		},
		mul: function () {
			return this.a * this.b;
		}
	}

	return obj
};

const calculator = createObjectCalculator(6, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6

calculator.read(12, 34);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6