import { arraysMatch } from '../utils';
import { storage, incrementCalls } from '../dataManager';

/**
 * @param func The function to be called
 * @param deps The dependencies that will cause the hook to recall the function
 */
const useEffect = (func: () => void | (() => any), deps: any[]): void => {
	const callId = incrementCalls();

	const { data, hasUnmount } = storage;

	if (!data[callId] || !deps || (deps.length > 0 && !arraysMatch(data[callId][1], deps))) {
		if (data[callId] && typeof data[callId][0] === 'function') data[callId][0]();
		data[callId] = [func(), deps];
		hasUnmount[callId] = callId;
	}
};

export default useEffect;
