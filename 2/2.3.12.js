class EventEmitter {
	constructor() {
		this.events = {};
	}

	on(eventName, callback) {
		if(!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(callback);
	}

	off(eventName, callback) {
		if(this.events[eventName]) {
			this.events[eventName] = this.events[eventName].filter(elem => elem !== callback);
		}
	}

	once(eventName, callback) {
		const onceCallback = (...args) => {
			callback(...args);
			this.off(eventName, onceCallback);
		};
		this.on(eventName, onceCallback);
	}

	emit(eventName, ...args) {
		if(this.events[eventName]) {
			this.events[eventName].forEach(elem => elem(...args));
		}
	}
}

class BroadcastEventEmitter extends EventEmitter {
	emit(eventName, ...args) {
		for (const key in this.events) {
			this.events[key].forEach(elem => elem(...args));
		}
	}
}


class Samurai {
	constructor(name) {
		this.name = name
	}
	hello() {
		alert(this.name)
	}
}