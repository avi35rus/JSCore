// 1
const getMostSenior = humans => {
	const maxAge = humans.reduce((acc, human) => {
		if (acc < human.age) acc = human.age
		return acc
	}, 0)

	const result = humans.reduce((acc, human) => {
		if (human.age === maxAge) {
			acc.push(human)
		}
		return acc
	}, [])
	
	return result
};

//2
const getMostSenior2 = humans => {
	const maxAge = humans.reduce((acc, human) => {
		if (acc < human.age) acc = human.age
		return acc
	}, 0)

	return humans.filter(human => human.age === maxAge)
};

const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 60, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 70, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 70, language: 'PHP' },
]
const result = getMostSenior(data);
const result2 = getMostSenior2(data);