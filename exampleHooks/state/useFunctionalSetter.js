/**
 * This hook requires you to get an updated copy of the incrementValue method
 * 	to make sure that you're updating value correctly. It will break if you attempt
 * 	to update the state of value more than once in a single "render".
 *
 * @param {function} useStateHook Whatever hook you would use to control the state
 */
export const useWithoutFunctionalSetter = useStateHook => () => {
	const [value, setValue] = useStateHook(5);

	const incrementValue = () => setValue(value + 1);

	return [value, incrementValue];
};

/**
 * This hook will allow you to update value without having to get a new
 * 	copy of incrementValue because it will always be based off of the most
 * 	recent state of value.
 *
 * @param {function} useStateHook Whatever hook you would use to control the state
 */
export const useWithFunctionalSetter = useStateHook => () => {
	const [value, setValue] = useStateHook(5);

	const incrementValue = () => setValue(prev => prev + 1);

	return [value, incrementValue];
};
