const getInitialState = () => 10;

export default useStateHook => () => useStateHook(getInitialState);
