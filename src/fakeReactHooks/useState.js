const states = [];
let calls = -1;

/*
 * For testing purposes only. Put afterEach(clearState) or beforeEach(clearState)
 *  at top of test file if using in multiple tests so that you get a fresh version
 *  with every test.
 */
export const clearState = () => {
	states.splice(0, states.length);
	calls = -1;
};

const useState = defaultValue => {
	const callId = ++calls;

	if (states[callId]) {
		return states[callId];
	}

	const setValue = newValue => {
		let newState;

		if (typeof newValue === 'function') {
			newState = newValue(states[callId][0]);
		} else {
			newState = newValue;
		}
		states[callId][0] = newState;
		calls = -1;
	};

	const state = [defaultValue, setValue];
	states[callId] = state;
	return state;
};

export default useState;
