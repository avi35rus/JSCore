const once = fn => {
	let value = true

	return function() {
		if(value) {
			fn()
			value = false
		}
	};
};

const f = () => console.log('hi!');
const onceF = once(f);

onceF();
onceF();