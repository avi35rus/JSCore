const getField = (data, field) => {
	if(!Array.isArray(data)) {
		return []
	}
	
	const arrCopy = data.slice();

	const arrRes = arrCopy.map(elem => elem[field]);

	return arrRes;
};

const data = [
	{
	  name: 'Denis',
	  age: 25,
	},
	{
	  name: 'Ivan',
	},
	{
	  name: 'Ann',
	  age: 18,
	},
  ];
  
  console.log(getField('age'));