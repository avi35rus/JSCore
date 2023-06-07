const calculatePrice = (orders) => {
	if(!orders) return 0
	return orders.reduce((acc, product) => {
		acc += product.price;
		return acc;
	}, 0);
};

const data = [
	{
		type: 'food',
		price: 130,
	},
	{
		type: 'clothes',
		price: 7300,
	},
	{
		type: 'other',
		price: 1400,
	},
];

console.log(calculatePrice(data));