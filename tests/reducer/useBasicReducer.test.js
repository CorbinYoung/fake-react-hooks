import { useFakeReducer, render, act } from '../../src';
import useBasicReducer from '../../exampleHooks/reducer/useBasicReducer';

it('can accurately track the state', () => {
	let [state, dispatch] = render(useBasicReducer(useFakeReducer));

	expect(state).toBe(10);

	[state] = act(() => dispatch({ type: 'INCREMENT' }));
	expect(state).toBe(11);

	[state] = act(() => dispatch({ type: 'INCREMENT' }));
	expect(state).toBe(12);

	[state] = act(() => dispatch({ type: 'SOME_RANDOME_TYPE' }));
	expect(state).toBe(12);

	[state] = act(() => dispatch({ type: 'DECREMENT' }));
	expect(state).toBe(11);

	[state] = act(() => dispatch({ type: 'DECREMENT' }));
	expect(state).toBe(10);

	[state] = act(() => dispatch({}));
	expect(state).toBe(10);

	[state] = act(() => dispatch({ type: 'RESET' }));
	expect(state).toBe(10);
});
