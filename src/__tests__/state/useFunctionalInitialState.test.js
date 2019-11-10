import { render, act, clearHook } from '../../renderer';
import useState, { clearState } from '../../fakeReactHooks/useState';
import useFunctionalInitialState from '../../exampleHooks/state/useFunctionalInitialState';

afterEach(clearState);

afterAll(clearHook);

it('sets the correct state using the functional initial state', () => {
	let [value, setValue] = render(useFunctionalInitialState(useState));

	expect(value).toBe(10);

	[value] = act(() => setValue(20));
	expect(value).toBe(20);

	[value] = act(() => setValue(30));
	expect(value).toBe(30);

	[value] = act(() => setValue(40));
	expect(value).toBe(40);
});
