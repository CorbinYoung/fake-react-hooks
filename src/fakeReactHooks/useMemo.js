import { arraysMatch } from '../utils';
import { data, incrementCalls } from '../dataManager';

export default (func, deps) => {
	const callId = incrementCalls();

	if (!data[callId] || !deps || (deps.length > 0 && !arraysMatch(data[callId][2], deps))) {
		data[callId] = [func(), func, deps];
	}

	return data[callId][0];
};
