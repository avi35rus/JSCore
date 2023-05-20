const defaultTo = (value, defaultValue) => {
	if (value === undefined || value === null || isNaN(value)) {
		return defaultValue
	} else {
		return value
	}
};