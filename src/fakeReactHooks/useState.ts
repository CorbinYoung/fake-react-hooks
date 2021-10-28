import { storage, incrementCalls } from '../dataManager';
import type { InitState, BasicStateAction, Dispatch } from '../customTypes';

/**
 * @param initialState The initial state
 * @returns The current state and a function with which to modify the state
 */
const useState = <S>(initialState: InitState<S>): [S, Dispatch<BasicStateAction<S>>] => {
  const callId = incrementCalls();

  const { data } = storage;

  if (data[callId]) return data[callId];

  const setValue = (newState: BasicStateAction<S>) => {
    data[callId][0] = typeof newState === 'function' ? newState(data[callId][0]) : newState;
  };

  const state: [S, Dispatch<BasicStateAction<S>>] = [typeof initialState === 'function' ? initialState() : initialState, setValue];
  data[callId] = state;
  return state;
};

export default useState;
