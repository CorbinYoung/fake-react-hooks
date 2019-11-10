const states = [];
let calls = -1;

/*
 * For testing purposes only. Put afterEach(clearState) or beforeEach(clearState)
 *  at top of test file if using in multiple tests so that you get a fresh version
 *  with every test.
 *
 * This method is akin to unmouning the React component using this hook
 */
export const clearState = () => {
	states.splice(0, states.length);
	calls = -1;
};

const useState = initialState => {
	const callId = ++calls;

	if (states[callId]) return states[callId];

	const setValue = newValue => {
		const newState = typeof newValue === 'function' ? newValue(states[callId][0]) : newValue;
		states[callId][0] = newState;
		calls = -1;
	};

	const state = [typeof initialState === 'function' ? initialState() : initialState, setValue];
	states[callId] = state;
	return state;
};

export default useState;
