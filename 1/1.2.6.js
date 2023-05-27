//1

function fizzbuzz(number) {
	if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
 	else if (number % 3 === 0) return 'Fizz'
	else if (number % 5 === 0) return 'Buzz'
	else return number
}

//2

function fizzbuzz(number) {
	return number % 3 === 0 || number % 5 === 0 ? 'FizzBuzz' : number % 3 === 0 ? 'Fizz' : number % 5 === 0 ? 'Buzz' : number
}