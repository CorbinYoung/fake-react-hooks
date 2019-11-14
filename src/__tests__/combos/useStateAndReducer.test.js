import { render, act } from '../../renderer';
import { clearData } from '../../dataManager';
import useState from '../../fakeReactHooks/useState';
import useReducer from '../../fakeReactHooks/useReducer';
import { singleUpdater, dualUpdaters } from '../../exampleHooks/combos/useStateAndReducer';

afterEach(clearData);

it('works with one method to update both states', () => {
	let [state, isTrue, doSomething] = render(singleUpdater(useState, useReducer));

	expect(state).toBe(10);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => doSomething('INCREMENT'));
	expect(state).toBe(11);
	expect(isTrue).toBeTruthy();

	[state, isTrue] = act(() => doSomething('INCREMENT'));
	expect(state).toBe(12);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => doSomething('DECREMENT'));
	expect(state).toBe(11);
	expect(isTrue).toBeTruthy();

	[state, isTrue] = act(() => doSomething('DECREMENT'));
	expect(state).toBe(10);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => doSomething('SOMETHING_RANDOM'));
	expect(state).toBe(10);
	expect(isTrue).toBeTruthy();
});

it('works with separate methods updating separate states', () => {
	let [state, isTrue, dispatch, setIsTrue] = render(dualUpdaters(useState, useReducer));

	expect(state).toBe(10);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => dispatch({ type: 'INCREMENT' }));
	expect(state).toBe(11);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => dispatch({ type: 'INCREMENT' }));
	expect(state).toBe(12);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => dispatch({ type: 'SOMETHING_RANDOM' }));
	expect(state).toBe(12);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => dispatch({ type: 'DECREMENT' }));
	expect(state).toBe(11);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => dispatch({ type: 'DECREMENT' }));
	expect(state).toBe(10);
	expect(isTrue).toBeFalsy();

	[state, isTrue] = act(() => setIsTrue(true));
	expect(state).toBe(10);
	expect(isTrue).toBeTruthy();

	[state, isTrue] = act(() => setIsTrue(false));
	expect(state).toBe(10);
	expect(isTrue).toBeFalsy();
});
