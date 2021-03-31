import { useFakeState, render, act } from '../../src';
import useSingleState from '../../exampleHooks/state/useSingleState';

it('works with custom state hook', () => {
	let [isTrue, setTrue, setFalse] = render(useSingleState(useFakeState));

	expect(isTrue).toBeFalsy();

	[isTrue] = act(setTrue);
	expect(isTrue).toBeTruthy();

	[isTrue] = act(setFalse);
	expect(isTrue).toBeFalsy();
});
