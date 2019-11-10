const reducer = (state, { type }) => {
	switch (type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

export const singleUpdater = (useStateHook, useReducerHook) => () => {
	const [state, dispatch] = useReducerHook(reducer, 10);
	const [isTrue, setIsTrue] = useStateHook(false);

	const doSomething = type => {
		dispatch({ type });
		setIsTrue(prev => !prev);
	};

	return [state, isTrue, doSomething];
};

export const dualUpdaters = (useStateHook, useReducerHook) => () => {
	const [state, dispatch] = useReducerHook(reducer, 10);
	const [isTrue, setIsTrue] = useStateHook(false);

	return [state, isTrue, dispatch, setIsTrue];
};
