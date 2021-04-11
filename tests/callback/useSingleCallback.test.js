import {
  useCallbackWithNoDeps,
	useCallbackWithBlankDeps,
	useCallbackWithDeps
} from '../../exampleHooks/callback/useSingleCallback';
import { useFakeCallback, render, rerender, clearData } from '../../src';

afterEach(clearData);

it('does not cache the function if no dependencies are provided', () => {
	const firstFunc = render(useCallbackWithNoDeps(useFakeCallback), () => {});

	const secondFunc = rerender(() => {});
	expect(secondFunc).not.toEqualFunction(firstFunc);

	const thirdFunc = rerender(() => {});
	expect(thirdFunc).not.toEqualFunction(firstFunc);
	expect(thirdFunc).not.toEqualFunction(secondFunc);

	const fourthFunc = rerender(() => {});
	expect(fourthFunc).not.toEqualFunction(firstFunc);
	expect(fourthFunc).not.toEqualFunction(secondFunc);
	expect(fourthFunc).not.toEqualFunction(thirdFunc);
});

it('caches the function once and never does it again with a blank dependency array', () => {
	const firstFunc = render(useCallbackWithBlankDeps(useFakeCallback), () => {});

	const secondFunc = rerender(() => {});
	expect(secondFunc).toEqualFunction(firstFunc);

	const thirdFunc = rerender(() => {});
	expect(thirdFunc).toEqualFunction(firstFunc);
	expect(thirdFunc).toEqualFunction(secondFunc);

	const fourthFunc = rerender(() => {});
	expect(fourthFunc).toEqualFunction(firstFunc);
	expect(fourthFunc).toEqualFunction(secondFunc);
	expect(fourthFunc).toEqualFunction(thirdFunc);
});

it('caches the function only when the dependencies match', () => {
	const firstFunc = render(useCallbackWithDeps(useFakeCallback), {
		func: () => {},
		dep: 10
	});

	const secondFunc = rerender({ func: () => {}, dep: 10 });
	expect(secondFunc).toEqualFunction(firstFunc);

	const thirdFunc = rerender({ func: () => {}, dep: 5 });
	expect(thirdFunc).not.toEqualFunction(firstFunc);
	expect(thirdFunc).not.toEqualFunction(secondFunc);

	const fourthFunc = rerender({ func: () => {}, dep: 5 });
	expect(fourthFunc).not.toEqualFunction(firstFunc);
	expect(fourthFunc).not.toEqualFunction(secondFunc);
	expect(fourthFunc).toEqualFunction(thirdFunc);
});
