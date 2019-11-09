import { render, act, clearHook } from '../../renderer';
import useState, { clearState } from '../../fakeReactHooks/useState';
import useMultipleStates from '../../exampleHooks/state/useMultipleStates';

afterEach(clearState);

afterAll(clearHook);

it('the useState hook correctly tracks all states', () => {
	let [value1, value2, value3, value4, rotateValues] = render(useMultipleStates(useState));

	expect(value1).toBe(1);
	expect(value2).toBe(2);
	expect(value3).toBe(3);
	expect(value4).toBe(4);

	[value1, value2, value3, value4, rotateValues] = act(rotateValues);
	expect(value1).toBe(2);
	expect(value2).toBe(3);
	expect(value3).toBe(4);
	expect(value4).toBe(1);

	[value1, value2, value3, value4, rotateValues] = act(rotateValues);
	expect(value1).toBe(3);
	expect(value2).toBe(4);
	expect(value3).toBe(1);
	expect(value4).toBe(2);

	[value1, value2, value3, value4, rotateValues] = act(rotateValues);
	expect(value1).toBe(4);
	expect(value2).toBe(1);
	expect(value3).toBe(2);
	expect(value4).toBe(3);

	[value1, value2, value3, value4] = act(rotateValues);
	expect(value1).toBe(1);
	expect(value2).toBe(2);
	expect(value3).toBe(3);
	expect(value4).toBe(4);
});

it("cannot update values correctly multiple times in one 'render'", () => {
	let [value1, value2, value3, value4, rotateValues] = render(useMultipleStates(useState));

	expect(value1).toBe(1);
	expect(value2).toBe(2);
	expect(value3).toBe(3);
	expect(value4).toBe(4);

	[value1, value2, value3, value4] = act(rotateValues);
	expect(value1).toBe(2);
	expect(value2).toBe(3);
	expect(value3).toBe(4);
	expect(value4).toBe(1);

	[value1, value2, value3, value4] = act(rotateValues);
	expect(value1).toBe(2);
	expect(value2).toBe(3);
	expect(value3).toBe(4);
	expect(value4).toBe(1);

	[value1, value2, value3, value4] = act(rotateValues);
	expect(value1).toBe(2);
	expect(value2).toBe(3);
	expect(value3).toBe(4);
	expect(value4).toBe(1);
});
