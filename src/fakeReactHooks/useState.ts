import { storage, incrementCalls } from '../dataManager';

/**
 * @param initialState The initial state
 * @returns The current state and a function with which to modify the state
 */
const useState = (initialState: any): [any, (newState: any) => any] => {
	const callId = incrementCalls();

	const { data } = storage;

	if (data[callId]) return data[callId];

	const setValue = (newState: any) => {
		data[callId][0] = typeof newState === 'function' ? newState(data[callId][0]) : newState;
	};

	const state: [any, (newState: any) => any] = [typeof initialState === 'function' ? initialState() : initialState, setValue];
	data[callId] = state;
	return state;
};

export default useState;
