export default (useStateHook, useCallbackHook) => () => {
	const [count, setCount] = useStateHook(0);

	const increment = useCallbackHook(() => setCount(prev => prev + 1), []);
	const decrement = useCallbackHook(() => setCount(prev => prev - 1), []);

	return [count, increment, decrement];
};
