export default (useStateHook, useMemoHook) => func => () => {
	const [value, setValue] = useStateHook(10);
	const memoizedValue = useMemoHook(() => func(value), [value]);

	return [memoizedValue, setValue];
};
