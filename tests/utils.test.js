import { arraysMatch } from '../src/utils';

it('arrays with different lengths are never the same', () => {
	const arr1 = [1, 2, 3];
	const arr2 = [1, 2, 3, 4];
	expect(arraysMatch(arr1, arr2)).toBeFalsy();
});

it('arrays with different values will not match', () => {
	const arr1 = [1, 2, 3];
	const arr2 = [4, 5, 6];
	expect(arraysMatch(arr1, arr2)).toBeFalsy();
});

it('an array compared to itself will match', () => {
	const arr1 = [1, 2, 3];
	expect(arraysMatch(arr1, arr1)).toBeTruthy();

	const arr2 = [() => {}, () => {}];
	expect(arraysMatch(arr2, arr2)).toBeTruthy();

	const arr3 = [{}, {}];
	expect(arraysMatch(arr3, arr3)).toBeTruthy();

	const arr4 = [[], []];
	expect(arraysMatch(arr4, arr4)).toBeTruthy();
});

it('arrays with the same values will match', () => {
	const arr1 = [1, 2, 3];
	const arr2 = [1, 2, 3];
	expect(arraysMatch(arr1, arr2)).toBeTruthy();
});

it("arrays with the same functions will only match if those functions are 'cached'", () => {
	const arr1 = [() => {}, () => {}];
	const arr2 = [() => {}, () => {}];
	expect(arraysMatch(arr1, arr2)).toBeFalsy();

	const noop = () => {};
	const arr3 = [noop, noop];
	const arr4 = [noop, noop];
	expect(arraysMatch(arr3, arr4)).toBeTruthy();
});

it("arrays with the same objects will only match if those objects are 'cached'", () => {
	const arr1 = [{}, {}];
	const arr2 = [{}, {}];
	expect(arraysMatch(arr1, arr2)).toBeFalsy();

	const obj = {};
	const arr3 = [obj, obj];
	const arr4 = [obj, obj];
	expect(arraysMatch(arr3, arr4)).toBeTruthy();
});

it("arrays with the same inner arrays will only match if those inner arrays are 'cached'", () => {
	const arr1 = [[], []];
	const arr2 = [[], []];
	expect(arraysMatch(arr1, arr2)).toBeFalsy();

	const arr = [];
	const arr3 = [arr, arr];
	const arr4 = [arr, arr];
	expect(arraysMatch(arr3, arr4)).toBeTruthy();
});
