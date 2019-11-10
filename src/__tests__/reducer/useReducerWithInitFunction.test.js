import { clearData } from '../../dataManager';
import { render, act, clearHook } from '../../renderer';
import useReducer from '../../fakeReactHooks/useReducer';
import useReducerWithInitFunction from '../../exampleHooks/reducer/useReducerWithInitFunction';

afterEach(clearData);

afterAll(clearHook);

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
