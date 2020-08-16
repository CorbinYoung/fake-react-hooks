const initialState = 10;

const reducer = (state, { type }) => {
	switch (type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};

export default useReducerHook => () => useReducerHook(reducer, initialState);
