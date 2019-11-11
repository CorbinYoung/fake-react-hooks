import { arraysMatch } from '../utils';
import { data, incrementCalls } from '../dataManager';

/**
 * @param {function} func The function to be called to get the cached value
 * @param {array} deps The dependencies that will cause the hook to re-cache the value
 */
const useMemo = (func, deps) => {
	const callId = incrementCalls();

	if (!data[callId] || !deps || (deps.length > 0 && !arraysMatch(data[callId][1], deps))) {
		data[callId] = [func(), deps];
	}

	return data[callId][0];
};

export default useMemo;
