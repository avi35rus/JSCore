const merge = (...value) => {
	return Object.assign({}, ...value)
}

console.log(
	merge(
	  {
		name: 'John',
		age: 22,
	  },
	  {
		surname: 'Klein',
		age: 20,
		profession: 'student',
	  },
	  {
		profession: 'frontend developer',
		country: 'USA',
	  }
	)
  );