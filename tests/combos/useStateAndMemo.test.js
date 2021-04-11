import { useFakeState, useFakeMemo, render, act } from '../../src';
import useStateAndMemo from '../../exampleHooks/combos/useStateAndMemo';

it('updates the memoized value based on state', () => {
	const fakeFunc = jest.fn(x => x * x);
	let [squaredValue, setValue] = render(useStateAndMemo(useFakeState, useFakeMemo)(fakeFunc));

	expect(squaredValue).toBe(100);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	[squaredValue] = act(() => setValue(10));
	expect(squaredValue).toBe(100);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	[squaredValue] = act(() => setValue(20));
	expect(squaredValue).toBe(400);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	[squaredValue] = act(() => setValue(20));
	expect(squaredValue).toBe(400);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	[squaredValue] = act(() => setValue(5));
	expect(squaredValue).toBe(25);
	expect(fakeFunc).toHaveBeenCalledTimes(3);

	[squaredValue] = act(() => setValue(5));
	expect(squaredValue).toBe(25);
	expect(fakeFunc).toHaveBeenCalledTimes(3);
});
