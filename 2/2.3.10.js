class Person {
	constructor(firstName, lastName, birthday) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;
	}

	getAge() {
		const today = new Date();
		const birthDate = new Date(this.birthday);

		let age = today.getFullYear() - birthDate.getFullYear();

		const monthDiff = today.getMonth() - birthDate.getMonth();

		if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--
		
		return age
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}
}
class Account {
	constructor(person, balance) {
		this.person = person;
		this.balance = balance;
		this.transactions = [];
	}

	addMoney(amount, description) {
		this.balance += amount;
		this.transactions.push({
			timestamp: new Date().getTime(),
			target: 'in',
			amount: amount,
			description: description
		})
	}

	withdrawMoney(amount, description) {
		this.balance -= amount;
		this.transactions.push({
			timestamp: new Date().getTime(),
			target: 'out',
			amount: amount,
			description: description
		})
	}

	getAmount() {
		return this.balance
	}

	getAccountHistory() {
		return this.transactions
	}

	static transfer(fromAccount, toAccount, amount) {
		fromAccount.balance -= amount
		toAccount.balance += amount

		fromAccount.transactions.push({
			timestamp: new Date().getTime(),
			target: 'out',
			amount: amount,
			description: null
		})

		toAccount.transactions.push({
			timestamp: new Date().getTime(),
			target: 'in',
			amount: amount,
			description: null
		})
	}
}

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 300);
console.log(helenAccount.getAmount()); // 500
console.log(alexAccount.getAmount()); // 1700

console.log(alexAccount.transactions)