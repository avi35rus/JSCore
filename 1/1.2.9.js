const areBracketsBalanced = (str) => {
	str = str.split('');
	for (let i = 0; i < str.length;) {
		if (str[i] === '(' && str[i + 1] === ')') {
			str.splice(i, 2);
			i = 0;
		}
		else i++;
	}
	str = str.join('');
	return str ? false : true
};

console.log(areBracketsBalanced('())()(()'))