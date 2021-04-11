const reducer1 = (state, { type }) => (type === 'TOGGLE' ? !state : state);

const reducer2 = (state, { type, payload }) => {
	switch (type) {
		case 'ADD':
			return state + payload;
		case 'SUB':
			return state - payload;
		default:
			return state;
	}
};

export default useReducerHook => () => {
	const [state1, dispatch1] = useReducerHook(reducer1, false);
	const [state2, dispatch2] = useReducerHook(reducer2, 10);

	return [state1, state2, dispatch1, dispatch2];
};
