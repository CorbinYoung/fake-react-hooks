export default useStateHook => () => {
	const [value1, setValue1] = useStateHook(1);
	const [value2, setValue2] = useStateHook(2);
	const [value3, setValue3] = useStateHook(3);
	const [value4, setValue4] = useStateHook(4);

	const rotateValues = () => {
		setValue1(value2);
		setValue2(value3);
		setValue3(value4);
		setValue4(value1);
	};

	return [value1, value2, value3, value4, rotateValues];
};
