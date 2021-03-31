import { useFakeState, useFakeCallback, render, act } from '../../src';
import useCounter from '../../exampleHooks/combos/useStateAndCallback';

it('tracks the state of the counter', () => {
	const [firstCount, firstIncrement, firstDecrement] = render(useCounter(useFakeState, useFakeCallback));

	expect(firstCount).toBe(0);

	let [count, secondIncrement, secondDecrement] = act(firstIncrement);
	expect(count).toBe(1);
	expect(secondIncrement).toEqualFunction(firstIncrement); // The increment and decrement methods are cached, so you don't need to keep getting the new versions. They won't change
	expect(secondDecrement).toEqualFunction(firstDecrement);

	[count] = act(firstIncrement);
	expect(count).toBe(2);

	[count] = act(firstDecrement);
	expect(count).toBe(1);

	[count] = act(firstDecrement);
	expect(count).toBe(0);
});
