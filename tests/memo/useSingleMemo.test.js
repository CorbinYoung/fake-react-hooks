import {
  useSingleMemoWithNoDeps,
	useSingleMemoWithBlankDeps,
	useSingleMemoWithDeps
} from '../../exampleHooks/memo/useSingleMemo';
import { useFakeMemo, render, rerender, clearData } from '../../src';

afterEach(clearData);

it('not passing dependencies to useMemo will make it re-call the function every render', () => {
	const fakeFunc = jest.fn(() => 10);

	let memoizedValue = render(useSingleMemoWithNoDeps(useFakeMemo), fakeFunc);

	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender(fakeFunc);
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	memoizedValue = rerender(fakeFunc);
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(3);

	memoizedValue = rerender(fakeFunc);
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(4);
});

it('passing a blank array of dependencies will make it never re-call the function', () => {
	const fakeFunc = jest.fn(() => 10);

	let memoizedValue = render(useSingleMemoWithBlankDeps(useFakeMemo), fakeFunc);

	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender(fakeFunc);
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender(fakeFunc);
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender(fakeFunc);
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);
});

it('passing actual dependencies will re-call the function only if the dependencies change', () => {
	const fakeFunc = jest.fn(() => 10);

	let memoizedValue = render(useSingleMemoWithDeps(useFakeMemo), {
		func: fakeFunc,
		prop1: 5,
		prop2: 10
	});

	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender({ func: fakeFunc, prop1: 5, prop2: 10 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(1);

	memoizedValue = rerender({ func: fakeFunc, prop1: 10, prop2: 10 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(2);

	memoizedValue = rerender({ func: fakeFunc, prop1: 10, prop2: 5 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(3);

	memoizedValue = rerender({ func: fakeFunc, prop1: 10, prop2: 5 });
	expect(memoizedValue).toBe(10);
	expect(fakeFunc).toHaveBeenCalledTimes(3);
});
