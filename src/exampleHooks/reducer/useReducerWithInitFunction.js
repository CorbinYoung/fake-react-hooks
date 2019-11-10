const init = value => ({ value });

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'INCREMENT':
			return { value: state.value + 1 };
		case 'DECREMENT':
			return { value: state.value - 1 };
		case 'RESET':
			return init(payload);
		default:
			return state;
	}
};

export default useReducerHook => () => useReducerHook(reducer, 10, init);
