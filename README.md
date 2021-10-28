# Fake React Hooks

The goal of this package is to assist developers in testing their own custom hooks independently of a React component. In fact, this project does not require React as a dependency at all. You could write a "hook" in vanilla JS and test it with this package.

The reason this package does not rely on React is that, while custom hooks are often designed for a specific component, trying to test that hook within that component can be difficult, as trying to test-render a component doesn't always allow developers direct access to the data and methods that their hooks return.

This package provides a fake version of most of the commonly used hooks (documentation [here](https://reactjs.org/docs/hooks-reference.html)). These hooks can be injected into a custom hook, and will then take the place of a normal React hook (examples down in the Usage section). The following hooks can be tested with this package:

- useState
- useEffect
- useReducer
- useCallback
- useMemo
- useRef

The following hooks are _not_ currently supported by this package:

- useContext
- useImperativeHandle
- useLayoutEffect
- useDebugValue

## Installation

This package can be installed using npm by running the following command:

```cli
npm install --save-dev fake-react-hooks
```

## Usage

There are numerous [example hooks](./exampleHooks) in this package for developers to look at to get an idea of how to test their custom hooks. Each example is also has a corresponding test file in the [tests](./tests) folder. Here is a quick example:

### useCounter.js

```js
// You'll still be using the React hooks for you're component, so you'll still want to import them
import { useState } from 'react';

// I use 'make' instead of 'use' to reference it for testing purposes
export const makeCounter = useStateHook => (initialValue = 0) => {
  const [count, setCount] = useStateHook(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return [count, increment, decrement];
};

// This is the hook that your component will use, as it has the React hook injected
export default makeCounter(useState);
```

### useCounter.test.js

```js
import { useFakeState, render, act, clearData } from 'fake-react-hooks';

// Make sure you import the test version, not the one with the React hook
import { makeCounter } from './useCounter';

// This is required if you have more than one test in a file to make sure that all the hooks are cleared
//  between tests so they don't override each other.
afterEach(clearData);

it('increments the value by 1', () => {
  // After the hook parameter, any other parameters can be passed in like they normally would be to the hook
  let [count, increment] = render(makeCounter(useFakeState), 10);

  expect(count).toBe(10);

  // Any setter that changes state must be called inside the 'act' method.
  // The act method can also be given the hook's parameters, as it will 'rerender' the hook once the state is changed
  [count] = act(increment);

  expect(count).toBe(11);

  // Since increment used a functional setter, we don't need an updated version of 'increment' as it will always use the most up-to-date state
  [count] = act(increment);

  expect(count).toBe(12);
});

it('decrements the value by 1', () => {
  // You can also make them constant and create new variables on each render
  const [firstCount, , decrement] = render(makeCounter(useFakeState));
  expect(firstCount).toBe(0);

  const [secondCount] = act(decrement);
  expect(secondCount).toBe(-1);

  const [thirdCount] = act(decrement);
  expect(thirdCount).toBe(-2);

  // Different variables can be helpful when comparing old values to new values
  expect(firstCount).not.toBe(secondCount);
  expect(firstCount).not.toBe(thirdCount);
  expect(secondCount).not.toBe(thirdCount);
});
```
