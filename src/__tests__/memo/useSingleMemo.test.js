import { clearData } from '../../dataManager';
import {
	useSingleMemoWithNoDeps,
	useSingleMemoWithBlankDeps,
	useSingleMemoWithDeps
} from '../../exampleHooks/memo/useSingleMemo';
import useMemo from '../../fakeReactHooks/useMemo';
import { render, rerender, clearHook } from '../../renderer';

afterEach(clearData);

afterAll(clearHook);

it('not passing dependencies to useMemo will make it re-call the function every render', () => {
	const fakeFunc = jest.fn(() => 10);

	let memoizedValue = render(useSingleMemoWithNoDeps(useMemo)(fakeFunc));

	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender();
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	memoizedValue = rerender();
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(3);

	memoizedValue = rerender();
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(4);
});

it('passing a blank array of dependencies will make it never re-call the function', () => {
	const fakeFunc = jest.fn(() => 10);

	let memoizedValue = render(useSingleMemoWithBlankDeps(useMemo)(fakeFunc));

	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender();
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender();
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender();
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);
});

it('passing actual dependencies will re-call the function only if the dependencies change', () => {
	const fakeFunc = jest.fn(() => 10);

	let memoizedValue = render(useSingleMemoWithDeps(useMemo)(fakeFunc), {
		prop1: 5,
		prop2: 10
	});

	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender({ prop1: 5, prop2: 10 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender({ prop1: 10, prop2: 10 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	memoizedValue = rerender({ prop1: 10, prop2: 5 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(3);

	memoizedValue = rerender({ prop1: 10, prop2: 5 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(3);
});
