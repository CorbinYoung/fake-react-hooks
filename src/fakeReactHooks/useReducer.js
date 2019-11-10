import { data, incrementCalls } from '../dataManager';

const useReducer = (reducer, initialState, init) => {
	const callId = incrementCalls();

	if (data[callId]) return data[callId];

	const dispatch = action => {
		data[callId][0] = reducer(data[callId][0], action);
	};

	const state = [init ? init(initialState) : initialState, dispatch];
	data[callId] = state;
	return state;
};

export default useReducer;
