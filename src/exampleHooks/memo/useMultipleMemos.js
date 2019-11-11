export default useMemoHook => func => ({ prop1, prop2 }) => {
	const memoizedValue1 = useMemoHook(() => func(prop1), [prop1]);
	const memoizedValue2 = useMemoHook(() => func(prop2), [prop2]);

	return [memoizedValue1, memoizedValue2];
};
