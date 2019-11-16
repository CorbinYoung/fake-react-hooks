export default useEffectHook => ({ func1, func2, dep1, dep2 }) => {
	useEffectHook(func1, [dep1]);
	useEffectHook(func2, [dep2]);
};
