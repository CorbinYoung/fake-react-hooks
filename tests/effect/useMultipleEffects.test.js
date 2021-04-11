import useMultipleEffects from '../../exampleHooks/effect/useMultipleEffects';
import { useFakeEffect, render, rerender, unmount, clearData } from '../../src';

afterEach(clearData);

describe('only reruns the effect for when its own dependencies change', () => {
	it('without return functions', () => {
		const func1 = jest.fn();
		const func2 = jest.fn();

		render(useMultipleEffects(useFakeEffect), { func1, func2, dep1: 5, dep2: 5 });
		expect(func1).toHaveBeenCalled();
		expect(func2).toHaveBeenCalled();

		rerender({ func1, func2, dep1: 5, dep2: 5 });
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(1);

		rerender({ func1, func2, dep1: 10, dep2: 5 });
		expect(func1).toHaveBeenCalledTimes(2);
		expect(func2).toHaveBeenCalledTimes(1);

		rerender({ func1, func2, dep1: 10, dep2: 10 });
		expect(func1).toHaveBeenCalledTimes(2);
		expect(func2).toHaveBeenCalledTimes(2);

		rerender({ func1, func2, dep1: 5, dep2: 5 });
		expect(func1).toHaveBeenCalledTimes(3);
		expect(func2).toHaveBeenCalledTimes(3);
	});

	it('with return functions', () => {
		const returnFunc1 = jest.fn();
		const returnFunc2 = jest.fn();
		const func1 = jest.fn(() => returnFunc1);
		const func2 = jest.fn(() => returnFunc2);

		render(useMultipleEffects(useFakeEffect), { func1, func2, dep1: 5, dep2: 5 });
		expect(func1).toHaveBeenCalled();
		expect(func2).toHaveBeenCalled();
		expect(returnFunc1).not.toHaveBeenCalled();
		expect(returnFunc2).not.toHaveBeenCalled();

		rerender({ func1, func2, dep1: 5, dep2: 5 });
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(1);
		expect(returnFunc1).not.toHaveBeenCalled();
		expect(returnFunc2).not.toHaveBeenCalled();

		rerender({ func1, func2, dep1: 10, dep2: 5 });
		expect(func1).toHaveBeenCalledTimes(2);
		expect(func2).toHaveBeenCalledTimes(1);
		expect(returnFunc1).toHaveBeenCalledTimes(1);
		expect(returnFunc2).not.toHaveBeenCalled();

		rerender({ func1, func2, dep1: 10, dep2: 10 });
		expect(func1).toHaveBeenCalledTimes(2);
		expect(func2).toHaveBeenCalledTimes(2);
		expect(returnFunc1).toHaveBeenCalledTimes(1);
		expect(returnFunc2).toHaveBeenCalledTimes(1);

		rerender({ func1, func2, dep1: 5, dep2: 5 });
		expect(func1).toHaveBeenCalledTimes(3);
		expect(func2).toHaveBeenCalledTimes(3);
		expect(returnFunc1).toHaveBeenCalledTimes(2);
		expect(returnFunc2).toHaveBeenCalledTimes(2);

		unmount();
		expect(func1).toHaveBeenCalledTimes(3);
		expect(func2).toHaveBeenCalledTimes(3);
		expect(returnFunc1).toHaveBeenCalledTimes(3);
		expect(returnFunc2).toHaveBeenCalledTimes(3);
	});
});
