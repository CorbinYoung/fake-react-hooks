"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _dataManager = require("../dataManager");

/**
 * @param func The function to be called to get the cached value
 * @param deps The dependencies that will cause the hook to re-cache the value
 * @returns The cached value that is the result of calling the given function
 */
const useMemo = (func, deps) => {
  const callId = (0, _dataManager.incrementCalls)();
  const {
    data
  } = _dataManager.storage;

  if (!data[callId] || !deps || deps.length > 0 && !(0, _utils.arraysMatch)(data[callId][1], deps)) {
    data[callId] = [func(), deps];
  }

  return data[callId][0];
};

var _default = useMemo;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWtlUmVhY3RIb29rcy91c2VNZW1vLnRzIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJmdW5jIiwiZGVwcyIsImNhbGxJZCIsImRhdGEiLCJzdG9yYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxJQUFELEVBQWtCQyxJQUFsQixLQUF1QztBQUN0RCxRQUFNQyxNQUFNLEdBQUcsa0NBQWY7QUFFQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBV0Msb0JBQWpCOztBQUVBLE1BQUksQ0FBQ0QsSUFBSSxDQUFDRCxNQUFELENBQUwsSUFBaUIsQ0FBQ0QsSUFBbEIsSUFBMkJBLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWQsSUFBbUIsQ0FBQyx3QkFBWUYsSUFBSSxDQUFDRCxNQUFELENBQUosQ0FBYSxDQUFiLENBQVosRUFBNkJELElBQTdCLENBQW5ELEVBQXdGO0FBQ3ZGRSxJQUFBQSxJQUFJLENBQUNELE1BQUQsQ0FBSixHQUFlLENBQUNGLElBQUksRUFBTCxFQUFTQyxJQUFULENBQWY7QUFDQTs7QUFFRCxTQUFPRSxJQUFJLENBQUNELE1BQUQsQ0FBSixDQUFhLENBQWIsQ0FBUDtBQUNBLENBVkQ7O2VBWWVILE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheXNNYXRjaCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHN0b3JhZ2UsIGluY3JlbWVudENhbGxzIH0gZnJvbSAnLi4vZGF0YU1hbmFnZXInO1xuXG4vKipcbiAqIEBwYXJhbSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgdG8gZ2V0IHRoZSBjYWNoZWQgdmFsdWVcbiAqIEBwYXJhbSBkZXBzIFRoZSBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGNhdXNlIHRoZSBob29rIHRvIHJlLWNhY2hlIHRoZSB2YWx1ZVxuICogQHJldHVybnMgVGhlIGNhY2hlZCB2YWx1ZSB0aGF0IGlzIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgZ2l2ZW4gZnVuY3Rpb25cbiAqL1xuY29uc3QgdXNlTWVtbyA9IChmdW5jOiAoKSA9PiBhbnksIGRlcHM6IGFueVtdKTogYW55ID0+IHtcblx0Y29uc3QgY2FsbElkID0gaW5jcmVtZW50Q2FsbHMoKTtcblxuXHRjb25zdCB7IGRhdGEgfSA9IHN0b3JhZ2U7XG5cblx0aWYgKCFkYXRhW2NhbGxJZF0gfHwgIWRlcHMgfHwgKGRlcHMubGVuZ3RoID4gMCAmJiAhYXJyYXlzTWF0Y2goZGF0YVtjYWxsSWRdWzFdLCBkZXBzKSkpIHtcblx0XHRkYXRhW2NhbGxJZF0gPSBbZnVuYygpLCBkZXBzXTtcblx0fVxuXG5cdHJldHVybiBkYXRhW2NhbGxJZF1bMF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNZW1vO1xuIl19