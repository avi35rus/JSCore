console.log(compareWithPrecision (1 + 2, 5, 2))

function compareWithPrecision(a, b, precision) {
	if (a - b <= precision) {
		return true
	} else {
		return false
	}
}	