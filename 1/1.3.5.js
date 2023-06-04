function optionalChaining (obj, chain, i = 0) {
	if (chain.length === 0) return undefined;

	if (typeof obj === 'object' && obj !== null && chain[i] in obj) {
	  return optionalChaining(obj[chain[i]], chain, i + 1);
	}

	if (i < chain.length) return undefined;
	return obj;
}

const obj = {
	a: {
		b: {
			c: {
				d: {

				}
			}
		}
	}
}

console.log(optionalChaining(obj, ["a", "b", "c", "d"]))