class AttemptsLimitExceeded extends Error {
	constructor(){
		super('Max attempts limit exceed');
		this.name = 'AttemptsLimitExceeded';
	}
}
  
class NotFoundError extends Error {
	constructor(){
		super('Not found');
		this.name = 'NotFoundError';
	}
}

class TemporaryError extends Error {
	constructor(){
		super('TemporaryError');
		this.name = 'TemporaryError';
	}
}

function getRepeatableData(getData, key, maxRequestsNumber) {
	let counter = 0;

	while (maxRequestsNumber === undefined || maxRequestsNumber > counter) {
		try {
			return getData(key);
		} 
		catch (error) {
			if (error instanceof NotFoundError) {
				throw error;
			}
			else if (error instanceof TemporaryError) {
				counter++;
				continue;
			}
			else {
				throw error;
			}
		}
	}

	throw new AttemptsLimitExceeded('')
}