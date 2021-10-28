import { storage, incrementCalls } from '../dataManager';

/**
 * @param initialState The initial state
 * @returns An object with a current field
 */
const useRef = <T>(initialState: T): { current: T } => {
  const callId = incrementCalls();

  const { data } = storage;

  if(!data[callId]) data[callId] = { current: initialState };

  return data[callId];
};

export default useRef;