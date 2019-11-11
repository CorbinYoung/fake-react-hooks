import { clearData } from '../../dataManager';
import useState from '../../fakeReactHooks/useState';
import { render, act, clearHook } from '../../renderer';
import useSingleState from '../../exampleHooks/state/useSingleState';

afterEach(clearData);

afterAll(clearHook);

it('works with custom state hook', () => {
	const [firstRender, setTrue, setFalse] = render(useSingleState(useState));

	expect(firstRender).toBeFalsy();

	const [secondRender] = act(setTrue);
	expect(secondRender).toBeTruthy();

	const [thirdRender] = act(setFalse);
	expect(thirdRender).toBeFalsy();
});
