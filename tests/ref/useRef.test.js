import { clearData, render, act, useFakeRef } from '../../src';

afterEach(clearData);

it('works without a passed value', () => {
  const ref = render(useFakeRef);

  expect(ref).not.toBeNull();
  expect(ref.current).toBeUndefined();
});

it('works with a null value', () => {
  const ref = render(useFakeRef, null);

  expect(ref).not.toBeNull();
  expect(ref.current).toBeNull();
});

it('works an object value', () => {
  const object = { one: true, two: 1, three: [] };

  const ref = render(useFakeRef, object);

  expect(ref.current).toEqual(object);
});

it('works with a boolean value', () => {
  const ref = render(useFakeRef, false);

  expect(ref.current).toBeFalsy();
});

it('works with a number value', () => {
  const ref = render(useFakeRef, 10);

  expect(ref.current).toBe(10);
});

it('works with an array value', () => {
  const ref = render(useFakeRef, []);

  expect(ref.current).toEqual([]);
});

it('works when the current value is changed', () => {
  let ref = render(useFakeRef, null);
  expect(ref.current).toBeNull();

  ref = act(() => {
    ref.current = 10;
  });

  expect(ref.current).toBe(10);
});
