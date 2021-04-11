export const useCallbackWithNoDeps = useCallbackHook => func => useCallbackHook(func);

export const useCallbackWithBlankDeps = useCallbackHook => func => useCallbackHook(func, []);

export const useCallbackWithDeps = useCallbackHook => ({ func, dep }) => useCallbackHook(func, [dep]);
