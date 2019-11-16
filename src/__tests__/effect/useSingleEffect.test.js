import { clearData } from '../../dataManager';
import {
	useEffectWithNoDeps,
	useEffectWtihBlankDeps,
	useEffectWithDeps
} from '../../exampleHooks/effect/useSingleEffect';
import useEffect from '../../fakeReactHooks/useEffect';
import { render, rerender, unmount } from '../../renderer';

afterEach(clearData);

describe('always reruns the effect when no dependencies are given', () => {
	it('has no return function', () => {
		const func = jest.fn();

		render(useEffectWithNoDeps(useEffect), func);
		expect(func).toHaveBeenCalledTimes(1);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(2);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(3);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(4);
	});

	it('has a return function', () => {
		const returnFunc = jest.fn();
		const func = jest.fn(() => returnFunc);

		render(useEffectWithNoDeps(useEffect), func);
		expect(func).toHaveBeenCalledTimes(1);
		expect(returnFunc).not.toHaveBeenCalled();

		rerender(func);
		expect(func).toHaveBeenCalledTimes(2);
		expect(returnFunc).toHaveBeenCalledTimes(1);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(3);
		expect(returnFunc).toHaveBeenCalledTimes(2);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(4);
		expect(returnFunc).toHaveBeenCalledTimes(3);

		unmount();
		expect(func).toHaveBeenCalledTimes(4);
		expect(returnFunc).toHaveBeenCalledTimes(4);
	});
});

describe('never reruns the effect when blank dependency array is given', () => {
	it('has no return funcion', () => {
		const func = jest.fn();

		render(useEffectWtihBlankDeps(useEffect), func);
		expect(func).toHaveBeenCalledTimes(1);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(1);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(1);
	});

	it('has a return function', () => {
		const returnFunc = jest.fn();
		const func = jest.fn(() => returnFunc);

		render(useEffectWtihBlankDeps(useEffect), func);
		expect(func).toHaveBeenCalledTimes(1);
		expect(returnFunc).toHaveBeenCalledTimes(0);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(1);
		expect(returnFunc).toHaveBeenCalledTimes(0);

		rerender(func);
		expect(func).toHaveBeenCalledTimes(1);
		expect(returnFunc).toHaveBeenCalledTimes(0);

		unmount();
		expect(func).toHaveBeenCalledTimes(1);
		expect(returnFunc).toHaveBeenCalledTimes(1);
	});
});

describe('only reruns the effect when the dependencies change', () => {
	it('has no return function', () => {
		const func = jest.fn();

		render(useEffectWithDeps(useEffect), { func, dep: 5 });
		expect(func).toHaveBeenCalledTimes(1);

		rerender({ func, dep: 5 });
		expect(func).toHaveBeenCalledTimes(1);

		rerender({ func, dep: 10 });
		expect(func).toHaveBeenCalledTimes(2);

		rerender({ func, dep: 10 });
		expect(func).toHaveBeenCalledTimes(2);

		rerender({ func, dep: 5 });
		expect(func).toHaveBeenCalledTimes(3);
	});

	it('has a return function', () => {
		const returnFunc = jest.fn();
		const func = jest.fn(() => returnFunc);

		render(useEffectWithDeps(useEffect), { func, dep: 5 });
		expect(func).toHaveBeenCalledTimes(1);
		expect(returnFunc).not.toHaveBeenCalled();

		rerender({ func, dep: 5 });
		expect(func).toHaveBeenCalledTimes(1);
		expect(returnFunc).not.toHaveBeenCalled();

		rerender({ func, dep: 10 });
		expect(func).toHaveBeenCalledTimes(2);
		expect(returnFunc).toHaveBeenCalledTimes(1);

		rerender({ func, dep: 10 });
		expect(func).toHaveBeenCalledTimes(2);
		expect(returnFunc).toHaveBeenCalledTimes(1);

		rerender({ func, dep: 5 });
		expect(func).toHaveBeenCalledTimes(3);
		expect(returnFunc).toHaveBeenCalledTimes(2);

		unmount();
		expect(func).toHaveBeenCalledTimes(3);
		expect(returnFunc).toHaveBeenCalledTimes(3);
	});
});
