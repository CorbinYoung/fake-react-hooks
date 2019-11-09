import { render, act, clearHook } from '../../renderer';
import useState, { clearState } from '../../fakeReactHooks/useState';
import useSingleState from '../../exampleHooks/state/useSingleState';

afterEach(clearState);

afterAll(clearHook);

it('works with custom state hook', () => {
	const [firstRender, setTrue, setFalse] = render(useSingleState(useState));

	expect(firstRender).toBeFalsy();

	const [secondRender] = act(setTrue);
	expect(secondRender).toBeTruthy();

	const [thirdRender] = act(setFalse);
	expect(thirdRender).toBeFalsy();
});
