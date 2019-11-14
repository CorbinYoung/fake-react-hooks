export default useCallbackHook => ({ func1, dep1, func2, dep2 }) => {
	const cachedFunc1 = useCallbackHook(func1, [dep1]);
	const cachedFunc2 = useCallbackHook(func2, [dep2]);

	return [cachedFunc1, cachedFunc2];
};
