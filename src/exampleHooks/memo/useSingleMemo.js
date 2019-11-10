export const useSingleMemoWithNoDeps = useMemoHook => func => () => useMemoHook(func);

export const useSingleMemoWithBlankDeps = useMemoHook => func => () => useMemoHook(func, []);

export const useSingleMemoWithDeps = useMemoHook => func => ({ prop1, prop2 }) => useMemoHook(func, [prop1, prop2]);
