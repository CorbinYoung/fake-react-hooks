const states = [];
let calls = -1;

/*
 * For testing purposes only. Put afterEach(clearReducer) or beforeEach(clearReducer)
 *  at top of test file if using in multiple tests so that you get a fresh version
 *  with every test.
 *
 * This method is akin to unmounting the React component using this hook
 */
export const clearReducer = () => {
	states.splice(0, states.length);
	calls = -1;
};

const useReducer = (reducer, initialState, init) => {
	const callId = ++calls;

	if (states[callId]) return states[callId];

	const dispatch = action => {
		states[callId][0] = reducer(states[callId][0], action);
		calls = -1;
	};

	const state = [init ? init(initialState) : initialState, dispatch];
	states[callId] = state;
	return state;
};

export default useReducer;
