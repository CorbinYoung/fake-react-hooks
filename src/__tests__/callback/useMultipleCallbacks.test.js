import { render, rerender } from '../../renderer';
import useCallback from '../../fakeReactHooks/useCallback';
import useMultipleCallbacks from '../../exampleHooks/callback/useMultipleCallbacks';

it('caches the functions until only their dependency changes', () => {
	const [firstFunc1, firstFunc2] = render(useMultipleCallbacks(useCallback), {
		func1: () => {},
		dep1: 10,
		func2: () => {},
		dep2: 5
	});

	expect(firstFunc1).not.toEqualFunction(firstFunc2);

	const [secondFunc1, secondFunc2] = rerender({
		func1: () => {},
		dep1: 10,
		func2: () => {},
		dep2: 5
	});
	expect(secondFunc1).toEqualFunction(firstFunc1);
	expect(secondFunc2).toEqualFunction(firstFunc2);

	const [thirdFunc1, thirdFunc2] = rerender({
		func1: () => {},
		dep1: 5,
		func2: () => {},
		dep2: 5
	});
	expect(thirdFunc1).not.toEqualFunction(secondFunc1);
	expect(thirdFunc1).not.toEqualFunction(thirdFunc2);
	expect(thirdFunc2).toEqualFunction(firstFunc2);

	const [fourthFunc1, fourthFunc2] = rerender({
		func1: () => {},
		dep1: 10,
		func2: () => {},
		dep2: 5
	});
	expect(fourthFunc1).not.toEqualFunction(firstFunc1);
	expect(fourthFunc1).not.toEqualFunction(thirdFunc1);
	expect(fourthFunc2).toEqualFunction(firstFunc2);

	const [fifthFunc1, fifthFunc2] = rerender({
		func1: () => {},
		dep1: 10,
		func2: () => {},
		dep2: 10
	});
	expect(fifthFunc1).not.toEqualFunction(firstFunc1);
	expect(fifthFunc1).toEqualFunction(fourthFunc1);
	expect(fifthFunc2).not.toEqualFunction(fourthFunc2);
	expect(fifthFunc1).not.toEqualFunction(fifthFunc2);
});
