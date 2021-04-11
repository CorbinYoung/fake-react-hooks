import { useFakeReducer, render, act } from '../../src';
import useMultipleReducers from '../../exampleHooks/reducer/useMultipleReducers';

it('can track multiple states using multiple reducers', () => {
	let [state1, state2, dispatch1, dispatch2] = render(useMultipleReducers(useFakeReducer));

	expect(state1).toBeFalsy();
	expect(state2).toBe(10);

	[state1, state2] = act(() => dispatch1({ type: 'TOGGLE' }));
	expect(state1).toBeTruthy();
	expect(state2).toBe(10);

	[state1, state2] = act(() => dispatch1({ type: 'TOGGLE' }));
	expect(state1).toBeFalsy();
	expect(state2).toBe(10);

	[state1, state2] = act(() => dispatch1({ type: 'SOMETHING_RANDOM' }));
	expect(state1).toBeFalsy();
	expect(state2).toBe(10);

	[state1, state2] = act(() => dispatch2({ type: 'ADD', payload: 10 }));
	expect(state1).toBeFalsy();
	expect(state2).toBe(20);

	[state1, state2] = act(() => dispatch2({ type: 'ADD', payload: 5 }));
	expect(state1).toBeFalsy();
	expect(state2).toBe(25);

	[state1, state2] = act(() => dispatch2({ type: 'SUB', payload: 15 }));
	expect(state1).toBeFalsy();
	expect(state2).toBe(10);

	[state1, state2] = act(() => dispatch2({ type: 'SUB', payload: 2 }));
	expect(state1).toBeFalsy();
	expect(state2).toBe(8);

	[state1, state2] = act(() => dispatch2({ type: 'SOMETHING_RANDOM' }));
	expect(state1).toBeFalsy();
	expect(state2).toBe(8);
});
