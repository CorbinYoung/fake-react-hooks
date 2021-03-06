import { storage, incrementCalls } from '../dataManager';

/**
 * @param {*} initialState The initial state
 * @returns {[object, function]} The current state and a function with which to modify the state
 */
const useState = initialState => {
	const callId = incrementCalls();

	const { data } = storage;

	if (data[callId]) return data[callId];

	const setValue = newValue => {
		const newState = typeof newValue === 'function' ? newValue(data[callId][0]) : newValue;
		data[callId][0] = newState;
	};

	const state = [typeof initialState === 'function' ? initialState() : initialState, setValue];
	data[callId] = state;
	return state;
};

export default useState;
