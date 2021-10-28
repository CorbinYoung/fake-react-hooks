import { arraysMatch } from '../utils';
import { storage, incrementCalls } from '../dataManager';

/**
 * @param callback The function to be cached
 * @param deps The dependencies that will cause the hook to re-cache the value
 * @returns The cached function
 */
const useCallback = <T>(callback: T, deps: any[] | void | null): T => {
  const callId = incrementCalls();

  const { data } = storage;

  if (!data[callId] || !deps || (deps.length > 0 && !arraysMatch(data[callId][1], deps))) {
    data[callId] = [callback, deps];
  }

  return data[callId][0];
};

export default useCallback;
