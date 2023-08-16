
class ExecutionError extends Error {
    constructor(message, argData, stack) {
        super(message);
        this.name = 'ExecutionError';
        this.argData = argData;
        this.stack = stack;
    } 

    getArgData() {
        return this.argData;
    }
}

function applyFn(dataArr, callback) {
    const succeeded = [];
    const errors = [];

    for (let i = 0; i < dataArr.length; i++) {
        try {
            const result = callback(dataArr[i]);
            succeeded.push(result);
        } catch (error) {
            const executionError = new ExecutionError(error.message, dataArr[i], error.stack);
            errors.push(executionError);
        }
    }

    return {
        succeeded,
        errors
    };
}

