import { clearData } from '../../dataManager';
import useState from '../../fakeReactHooks/useState';
import { render, act, clearHook } from '../../renderer';
import { useWithFunctionalSetter, useWithoutFunctionalSetter } from '../../exampleHooks/state/useFunctionalSetter';

afterEach(clearData);

afterAll(clearHook);

// This is what happens when you try to update the state in React in one render and don't use the functional setter
it("cannot update state multiple times in one 'render'", () => {
	const [firstRender, incrementValue] = render(useWithoutFunctionalSetter(useState));

	expect(firstRender).toBe(5);

	const [secondRender] = act(incrementValue);
	expect(secondRender).toBe(6);

	const [thirdRender] = act(incrementValue);
	expect(thirdRender).toBe(6);

	const [fourthRender] = act(incrementValue);
	expect(fourthRender).toBe(6);
});

// This is how React generally works. You update the state, and it returns the new state along with a new upddate method.
it("can update state one time per 'render'", () => {
	const [firstRender, firstIncrement] = render(useWithoutFunctionalSetter(useState));

	expect(firstRender).toBe(5);

	const [secondRender, secondIncrement] = act(firstIncrement);
	expect(secondRender).toBe(6);

	const [thirdRender, thirdIncrement] = act(secondIncrement);
	expect(thirdRender).toBe(7);

	const [fourthRender] = act(thirdIncrement);
	expect(fourthRender).toBe(8);
});

// The functional setter allows the state to be updated multiple times without needing a "rerender"
it("can update state multiple times in one 'render' with functional setter", () => {
	const [firstRender, incrementValue] = render(useWithFunctionalSetter(useState));

	expect(firstRender).toBe(5);

	const [secondRender] = act(incrementValue);
	expect(secondRender).toBe(6);

	const [thirdRender] = act(incrementValue);
	expect(thirdRender).toBe(7);

	const [fourthRender] = act(incrementValue);
	expect(fourthRender).toBe(8);
});

it("can update state one time per 'render' with functional setter", () => {
	const [firstRender, firstIncrement] = render(useWithFunctionalSetter(useState));

	expect(firstRender).toBe(5);

	const [secondRender, secondIncrement] = act(firstIncrement);
	expect(secondRender).toBe(6);

	const [thirdRender, thirdIncrement] = act(secondIncrement);
	expect(thirdRender).toBe(7);

	const [fourthRender] = act(thirdIncrement);
	expect(fourthRender).toBe(8);
});
