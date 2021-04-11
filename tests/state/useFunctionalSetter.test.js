import { useFakeState, render, act, clearData } from '../../src';
import { useWithFunctionalSetter, useWithoutFunctionalSetter } from '../../exampleHooks/state/useFunctionalSetter';

afterEach(clearData);

// This is what happens when you try to update the state in React in one render and don't use the functional setter
it("cannot update state multiple times in one 'render'", () => {
	let [value, incrementValue] = render(useWithoutFunctionalSetter(useFakeState));

	expect(value).toBe(5);

	[value] = act(incrementValue);
	expect(value).toBe(6);

	[value] = act(incrementValue);
	expect(value).toBe(6);

	[value] = act(incrementValue);
	expect(value).toBe(6);
});

// This is how React generally works. You update the state, and it returns the new state along with a new upddate method.
it("can update state one time per 'render'", () => {
	let [value, incrementValue] = render(useWithoutFunctionalSetter(useFakeState));

	expect(value).toBe(5);

	[value, incrementValue] = act(incrementValue);
	expect(value).toBe(6);

	[value, incrementValue] = act(incrementValue);
	expect(value).toBe(7);

	[value] = act(incrementValue);
	expect(value).toBe(8);
});

// The functional setter allows the state to be updated multiple times without needing a "rerender"
it("can update state multiple times in one 'render' with functional setter", () => {
	let [value, incrementValue] = render(useWithFunctionalSetter(useFakeState));

	expect(value).toBe(5);

	[value] = act(incrementValue);
	expect(value).toBe(6);

	[value] = act(incrementValue);
	expect(value).toBe(7);

	[value] = act(incrementValue);
	expect(value).toBe(8);
});

it("can update state one time per 'render' with functional setter", () => {
	let [value, incrementValue] = render(useWithFunctionalSetter(useFakeState));

	expect(value).toBe(5);

	[value, incrementValue] = act(incrementValue);
	expect(value).toBe(6);

	[value, incrementValue] = act(incrementValue);
	expect(value).toBe(7);

	[value] = act(incrementValue);
	expect(value).toBe(8);
});
