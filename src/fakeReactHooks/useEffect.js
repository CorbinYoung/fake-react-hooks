import { arraysMatch } from '../utils';
import { storage, incrementCalls } from '../dataManager';

/**
 * @param {function} func The function to be called
 * @param {array} deps The dependencies that will cause the hook to recall the function
 */
const useEffect = (func, deps) => {
	const callId = incrementCalls();

	const { data, hasUnmount } = storage;

	if (!data[callId] || !deps || (deps.length > 0 && !arraysMatch(data[callId][1], deps))) {
		if (data[callId] && typeof data[callId][0] === 'function') data[callId][0]();
		const returnFunc = func();
		data[callId] = [returnFunc, deps];
		hasUnmount[callId] = callId;
	}
};

export default useEffect;
