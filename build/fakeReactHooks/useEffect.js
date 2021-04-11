"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _dataManager = require("../dataManager");

/**
 * @param func The function to be called
 * @param deps The dependencies that will cause the hook to recall the function
 */
const useEffect = (func, deps) => {
  const callId = (0, _dataManager.incrementCalls)();
  const {
    data,
    hasUnmount
  } = _dataManager.storage;

  if (!data[callId] || !deps || deps.length > 0 && !(0, _utils.arraysMatch)(data[callId][1], deps)) {
    if (data[callId] && typeof data[callId][0] === 'function') data[callId][0]();
    data[callId] = [func(), deps];
    hasUnmount[callId] = callId;
  }
};

var _default = useEffect;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWtlUmVhY3RIb29rcy91c2VFZmZlY3QudHMiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiZnVuYyIsImRlcHMiLCJjYWxsSWQiLCJkYXRhIiwiaGFzVW5tb3VudCIsInN0b3JhZ2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFNBQVMsR0FBRyxDQUFDQyxJQUFELEVBQWlDQyxJQUFqQyxLQUF1RDtBQUN4RSxRQUFNQyxNQUFNLEdBQUcsa0NBQWY7QUFFQSxRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUE7QUFBUixNQUF1QkMsb0JBQTdCOztBQUVBLE1BQUksQ0FBQ0YsSUFBSSxDQUFDRCxNQUFELENBQUwsSUFBaUIsQ0FBQ0QsSUFBbEIsSUFBMkJBLElBQUksQ0FBQ0ssTUFBTCxHQUFjLENBQWQsSUFBbUIsQ0FBQyx3QkFBWUgsSUFBSSxDQUFDRCxNQUFELENBQUosQ0FBYSxDQUFiLENBQVosRUFBNkJELElBQTdCLENBQW5ELEVBQXdGO0FBQ3ZGLFFBQUlFLElBQUksQ0FBQ0QsTUFBRCxDQUFKLElBQWdCLE9BQU9DLElBQUksQ0FBQ0QsTUFBRCxDQUFKLENBQWEsQ0FBYixDQUFQLEtBQTJCLFVBQS9DLEVBQTJEQyxJQUFJLENBQUNELE1BQUQsQ0FBSixDQUFhLENBQWI7QUFDM0RDLElBQUFBLElBQUksQ0FBQ0QsTUFBRCxDQUFKLEdBQWUsQ0FBQ0YsSUFBSSxFQUFMLEVBQVNDLElBQVQsQ0FBZjtBQUNBRyxJQUFBQSxVQUFVLENBQUNGLE1BQUQsQ0FBVixHQUFxQkEsTUFBckI7QUFDQTtBQUNELENBVkQ7O2VBWWVILFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheXNNYXRjaCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHN0b3JhZ2UsIGluY3JlbWVudENhbGxzIH0gZnJvbSAnLi4vZGF0YU1hbmFnZXInO1xuXG4vKipcbiAqIEBwYXJhbSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWRcbiAqIEBwYXJhbSBkZXBzIFRoZSBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGNhdXNlIHRoZSBob29rIHRvIHJlY2FsbCB0aGUgZnVuY3Rpb25cbiAqL1xuY29uc3QgdXNlRWZmZWN0ID0gKGZ1bmM6ICgpID0+IHZvaWQgfCAoKCkgPT4gYW55KSwgZGVwczogYW55W10pOiB2b2lkID0+IHtcblx0Y29uc3QgY2FsbElkID0gaW5jcmVtZW50Q2FsbHMoKTtcblxuXHRjb25zdCB7IGRhdGEsIGhhc1VubW91bnQgfSA9IHN0b3JhZ2U7XG5cblx0aWYgKCFkYXRhW2NhbGxJZF0gfHwgIWRlcHMgfHwgKGRlcHMubGVuZ3RoID4gMCAmJiAhYXJyYXlzTWF0Y2goZGF0YVtjYWxsSWRdWzFdLCBkZXBzKSkpIHtcblx0XHRpZiAoZGF0YVtjYWxsSWRdICYmIHR5cGVvZiBkYXRhW2NhbGxJZF1bMF0gPT09ICdmdW5jdGlvbicpIGRhdGFbY2FsbElkXVswXSgpO1xuXHRcdGRhdGFbY2FsbElkXSA9IFtmdW5jKCksIGRlcHNdO1xuXHRcdGhhc1VubW91bnRbY2FsbElkXSA9IGNhbGxJZDtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRWZmZWN0O1xuIl19