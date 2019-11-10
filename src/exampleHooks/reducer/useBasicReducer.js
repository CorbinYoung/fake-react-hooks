const reducer = (state, { type }) => {
	switch (type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RESET':
			return 0;
		default:
			return state;
	}
};

export default useReducerHook => () => useReducerHook(reducer, 10);
