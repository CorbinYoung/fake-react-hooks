import { clearData } from '../../dataManager';
import useMemo from '../../fakeReactHooks/useMemo';
import { render, rerender, clearHook } from '../../renderer';
import useMultipleMemos from '../../exampleHooks/memo/useMultipleMemos';

afterEach(clearData);

afterAll(clearHook);

it('tracks both memoized values', () => {
	const fakeFunc = jest.fn(x => x);
	let [value1, value2] = render(useMultipleMemos(useMemo)(fakeFunc), {
		prop1: 10,
		prop2: 5
	});

	expect(value1).toBe(10);
	expect(value2).toBe(5);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	[value1, value2] = rerender({ prop1: 10, prop2: 5 });
	expect(value1).toBe(10);
	expect(value2).toBe(5);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	[value1, value2] = rerender({ prop1: 5, prop2: 5 });
	expect(value1).toBe(5);
	expect(value2).toBe(5);
	expect(fakeFunc).toHaveBeenCalledTimes(3);

	[value1, value2] = rerender({ prop1: 5, prop2: 10 });
	expect(value1).toBe(5);
	expect(value2).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(4);

	[value1, value2] = rerender({ prop1: 10, prop2: 5 });
	expect(value1).toBe(10);
	expect(value2).toBe(5);
	expect(fakeFunc).toHaveBeenCalledTimes(6);
});
