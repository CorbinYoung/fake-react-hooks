import { clearData } from '../../dataManager';
import useMemo from '../../fakeReactHooks/useMemo';
import useState from '../../fakeReactHooks/useState';
import { render, act, clearHook } from '../../renderer';
import useStateAndMemo from '../../exampleHooks/combos/useStateAndMemo';

afterEach(clearData);

afterAll(clearHook);

it('updates the memoized value based on state', () => {
	const fakeFunc = jest.fn(x => x * x);
	let [squaredValue, setValue] = render(useStateAndMemo(useState, useMemo)(fakeFunc));

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
