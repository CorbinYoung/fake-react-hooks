let currentHook = null;

/**
 * Simulates the initial render of a component with a hook
 * @param {function} hook Whatever hook you're wanting to use
 */
export const render = hook => {
	currentHook = hook;
	return currentHook();
};

/**
 * Simulates the "rerender" of a component
 * @param {function} hookMethod Some method to update the state of the hook
 */
export const act = hookMethod => {
	hookMethod();
	return currentHook();
};

/** Wipes the current hook */
export const clearHook = () => {
	currentHook = null;
};
