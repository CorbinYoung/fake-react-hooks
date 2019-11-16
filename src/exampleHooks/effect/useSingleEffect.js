export const useEffectWithNoDeps = useEffectHook => func => useEffectHook(func);

export const useEffectWtihBlankDeps = useEffectHook => func => useEffectHook(func, []);

export const useEffectWithDeps = useEffectHook => ({ func, dep }) => useEffectHook(func, [dep]);
