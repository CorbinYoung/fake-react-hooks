import { render, act } from '../../renderer';
import useReducer from '../../fakeReactHooks/useReducer';
import useReducerWithInitFunction from '../../exampleHooks/reducer/useReducerWithInitFunction';

it('can correctly track state beginning with init', () => {
	let [state, dispatch] = render(useReducerWithInitFunction(useReducer));

	expect(state).toEqual({ value: 10 });

	[state] = act(() => dispatch({ type: 'INCREMENT' }));
	expect(state).toEqual({ value: 11 });

	[state] = act(() => dispatch({ type: 'INCREMENT' }));
	expect(state).toEqual({ value: 12 });

	[state] = act(() => dispatch({ type: 'SOME_RANDOM_STRING' }));
	expect(state).toEqual({ value: 12 });

	[state] = act(() => dispatch({ type: 'DECREMENT' }));
	expect(state).toEqual({ value: 11 });

	[state] = act(() => dispatch({ type: 'DECREMENT' }));
	expect(state).toEqual({ value: 10 });

	[state] = act(() => dispatch({ type: 'RESET', payload: 0 }));
	expect(state).toEqual({ value: 0 });
});
