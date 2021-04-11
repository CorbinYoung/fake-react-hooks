export default useStateHook => () => {
	const [isTrue, setIsTrue] = useStateHook(false);

	const setTrue = () => setIsTrue(true);
	const setFalse = () => setIsTrue(false);

	return [isTrue, setTrue, setFalse];
};
