import useState from '../../fakeReactHooks/useState';
import { render, act } from '../../renderer';

it('sets the correct state using the functional initial state', () => {
	const initialState = jest.fn(() => 10);

	let [value, setValue] = render(() => useState(initialState));

	expect(value).toBe(10);
	expect(initialState).toHaveBeenCalled();

	[value] = act(() => setValue(20));
	expect(value).toBe(20);
	expect(initialState).toHaveBeenCalledTimes(1);

	[value] = act(() => setValue(30));
	expect(value).toBe(30);
	expect(initialState).toHaveBeenCalledTimes(1);

	[value] = act(() => setValue(40));
	expect(value).toBe(40);
	expect(initialState).toHaveBeenCalledTimes(1);
});
