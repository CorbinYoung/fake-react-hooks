import { arraysMatch } from '../utils';
import { storage, incrementCalls } from '../dataManager';

/**
 * @param {function} func The function to be called to get the cached value
 * @param {array} deps The dependencies that will cause the hook to re-cache the value
 * @returns {*} The cached value that is the result of calling the given function
 */
const useMemo = (func, deps) => {
	const callId = incrementCalls();

	const { data } = storage;

	if (!data[callId] || !deps || (deps.length > 0 && !arraysMatch(data[callId][1], deps))) {
		data[callId] = [func(), deps];
	}

	return data[callId][0];
};

export default useMemo;
