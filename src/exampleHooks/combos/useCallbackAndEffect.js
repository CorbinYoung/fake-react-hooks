export default (useCallbackHook, useEffectHook) => ({ func, dep }) => {
	const memoizedFunc = useCallbackHook(func, [dep]);

	useEffectHook(memoizedFunc, [memoizedFunc]);
};
