"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _dataManager = require("../dataManager");

/**
 * @param func The function to be cached
 * @param deps The dependencies that will cause the hook to re-cache the value
 * @returns The cached function
 */
const useCallback = (func, deps) => {
  const callId = (0, _dataManager.incrementCalls)();
  const {
    data
  } = _dataManager.storage;

  if (!data[callId] || !deps || deps.length > 0 && !(0, _utils.arraysMatch)(data[callId][1], deps)) {
    data[callId] = [func, deps];
  }

  return data[callId][0];
};

var _default = useCallback;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWtlUmVhY3RIb29rcy91c2VDYWxsYmFjay50cyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsImZ1bmMiLCJkZXBzIiwiY2FsbElkIiwiZGF0YSIsInN0b3JhZ2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHLENBQUNDLElBQUQsRUFBa0JDLElBQWxCLEtBQStDO0FBQ2xFLFFBQU1DLE1BQU0sR0FBRyxrQ0FBZjtBQUVBLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFXQyxvQkFBakI7O0FBRUEsTUFBSSxDQUFDRCxJQUFJLENBQUNELE1BQUQsQ0FBTCxJQUFpQixDQUFDRCxJQUFsQixJQUEyQkEsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBZCxJQUFtQixDQUFDLHdCQUFZRixJQUFJLENBQUNELE1BQUQsQ0FBSixDQUFhLENBQWIsQ0FBWixFQUE2QkQsSUFBN0IsQ0FBbkQsRUFBd0Y7QUFDdkZFLElBQUFBLElBQUksQ0FBQ0QsTUFBRCxDQUFKLEdBQWUsQ0FBQ0YsSUFBRCxFQUFPQyxJQUFQLENBQWY7QUFDQTs7QUFFRCxTQUFPRSxJQUFJLENBQUNELE1BQUQsQ0FBSixDQUFhLENBQWIsQ0FBUDtBQUNBLENBVkQ7O2VBWWVILFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheXNNYXRjaCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHN0b3JhZ2UsIGluY3JlbWVudENhbGxzIH0gZnJvbSAnLi4vZGF0YU1hbmFnZXInO1xuXG4vKipcbiAqIEBwYXJhbSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiZSBjYWNoZWRcbiAqIEBwYXJhbSBkZXBzIFRoZSBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGNhdXNlIHRoZSBob29rIHRvIHJlLWNhY2hlIHRoZSB2YWx1ZVxuICogQHJldHVybnMgVGhlIGNhY2hlZCBmdW5jdGlvblxuICovXG5jb25zdCB1c2VDYWxsYmFjayA9IChmdW5jOiAoKSA9PiBhbnksIGRlcHM6IGFueVtdKTogKCgpID0+IGFueSkgPT4ge1xuXHRjb25zdCBjYWxsSWQgPSBpbmNyZW1lbnRDYWxscygpO1xuXG5cdGNvbnN0IHsgZGF0YSB9ID0gc3RvcmFnZTtcblxuXHRpZiAoIWRhdGFbY2FsbElkXSB8fCAhZGVwcyB8fCAoZGVwcy5sZW5ndGggPiAwICYmICFhcnJheXNNYXRjaChkYXRhW2NhbGxJZF1bMV0sIGRlcHMpKSkge1xuXHRcdGRhdGFbY2FsbElkXSA9IFtmdW5jLCBkZXBzXTtcblx0fVxuXG5cdHJldHVybiBkYXRhW2NhbGxJZF1bMF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYWxsYmFjaztcbiJdfQ==