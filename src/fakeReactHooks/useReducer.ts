import { storage, incrementCalls } from '../dataManager';

/**
 * @param reducer Method to handle how to update the new state
 * @param initialState The initial state
 * @param init Method to create the initial state
 * @returns The current state and a method with which to modify it
 */
const useReducer = (reducer: (state: any, action: any) => any, initialState: any, init: (state: any) => any): [any, (action: any) => any] => {
	const callId = incrementCalls();

	const { data } = storage;

	if (data[callId]) return data[callId];

	const dispatch = (action: any) => {
		data[callId][0] = reducer(data[callId][0], action);
	};

	const state: [any, (action: any) => any] = [init ? init(initialState) : initialState, dispatch];
	data[callId] = state;
	return state;
};

export default useReducer;
