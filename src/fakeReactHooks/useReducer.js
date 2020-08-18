import { storage, incrementCalls } from '../dataManager';

/**
 * @param {function} reducer Method to handle how to update the new state
 * @param {*} initialState The initial state
 * @param {function} init Method to create the initial state
 * @returns {[object, function]} The current state and a method with which to modify it
 */
const useReducer = (reducer, initialState, init) => {
	const callId = incrementCalls();

	const { data } = storage;

	if (data[callId]) return data[callId];

	const dispatch = action => {
		data[callId][0] = reducer(data[callId][0], action);
	};

	const state = [init ? init(initialState) : initialState, dispatch];
	data[callId] = state;
	return state;
};

export default useReducer;
