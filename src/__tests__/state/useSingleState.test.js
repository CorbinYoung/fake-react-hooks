import useState from '../../fakeReactHooks/useState';
import { render, act } from '../../renderer';
import useSingleState from '../../exampleHooks/state/useSingleState';

it('works with custom state hook', () => {
	let [isTrue, setTrue, setFalse] = render(useSingleState(useState));

	expect(isTrue).toBeFalsy();

	[isTrue] = act(setTrue);
	expect(isTrue).toBeTruthy();

	[isTrue] = act(setFalse);
	expect(isTrue).toBeFalsy();
});
