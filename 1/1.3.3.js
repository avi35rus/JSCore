function sequenceSum (begin, end) {
	if (begin > end) return NaN
	else if (begin === end) return begin
	else return begin + sequenceSum (begin += 1, end)
}

console.log(sequenceSum(-3, 3))