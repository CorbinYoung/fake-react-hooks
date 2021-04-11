import { useFakeEffect, useFakeCallback, render, rerender } from '../../src';
import useCallbackAndEffect from '../../exampleHooks/combos/useCallbackAndEffect';

it('caches the callback and does not rerun the effect unless the callback changes', () => {
	let func = jest.fn();
	render(useCallbackAndEffect(useFakeCallback, useFakeEffect), { func, dep: 5 });
	expect(func).toHaveBeenCalled();

	func = jest.fn(); // We cannot just set this to a constant because props pass a new instance every render
	rerender({ func, dep: 5 });
	expect(func).not.toHaveBeenCalled();

	func = jest.fn();
	rerender({ func, dep: 10 });
	expect(func).toHaveBeenCalled();

	func = jest.fn();
	rerender({ func, dep: 10 });
	expect(func).not.toHaveBeenCalled();

	func = jest.fn();
	rerender({ func, dep: 5 });
	expect(func).toHaveBeenCalled();
});
