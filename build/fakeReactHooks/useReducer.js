"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataManager = require("../dataManager");

/**
 * @param reducer Method to handle how to update the new state
 * @param initialState The initial state
 * @param init Method to create the initial state
 * @returns The current state and a method with which to modify it
 */
const useReducer = (reducer, initialState, init) => {
  const callId = (0, _dataManager.incrementCalls)();
  const {
    data
  } = _dataManager.storage;
  if (data[callId]) return data[callId];

  const dispatch = action => {
    data[callId][0] = reducer(data[callId][0], action);
  };

  const state = [init ? init(initialState) : initialState, dispatch];
  data[callId] = state;
  return state;
};

var _default = useReducer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWtlUmVhY3RIb29rcy91c2VSZWR1Y2VyLnRzIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiaW5pdCIsImNhbGxJZCIsImRhdGEiLCJzdG9yYWdlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFVBQVUsR0FBRyxDQUFDQyxPQUFELEVBQTRDQyxZQUE1QyxFQUErREMsSUFBL0QsS0FBMEg7QUFDNUksUUFBTUMsTUFBTSxHQUFHLGtDQUFmO0FBRUEsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVdDLG9CQUFqQjtBQUVBLE1BQUlELElBQUksQ0FBQ0QsTUFBRCxDQUFSLEVBQWtCLE9BQU9DLElBQUksQ0FBQ0QsTUFBRCxDQUFYOztBQUVsQixRQUFNRyxRQUFRLEdBQUlDLE1BQUQsSUFBaUI7QUFDakNILElBQUFBLElBQUksQ0FBQ0QsTUFBRCxDQUFKLENBQWEsQ0FBYixJQUFrQkgsT0FBTyxDQUFDSSxJQUFJLENBQUNELE1BQUQsQ0FBSixDQUFhLENBQWIsQ0FBRCxFQUFrQkksTUFBbEIsQ0FBekI7QUFDQSxHQUZEOztBQUlBLFFBQU1DLEtBQWtDLEdBQUcsQ0FBQ04sSUFBSSxHQUFHQSxJQUFJLENBQUNELFlBQUQsQ0FBUCxHQUF3QkEsWUFBN0IsRUFBMkNLLFFBQTNDLENBQTNDO0FBQ0FGLEVBQUFBLElBQUksQ0FBQ0QsTUFBRCxDQUFKLEdBQWVLLEtBQWY7QUFDQSxTQUFPQSxLQUFQO0FBQ0EsQ0FkRDs7ZUFnQmVULFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yYWdlLCBpbmNyZW1lbnRDYWxscyB9IGZyb20gJy4uL2RhdGFNYW5hZ2VyJztcblxuLyoqXG4gKiBAcGFyYW0gcmVkdWNlciBNZXRob2QgdG8gaGFuZGxlIGhvdyB0byB1cGRhdGUgdGhlIG5ldyBzdGF0ZVxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZVxuICogQHBhcmFtIGluaXQgTWV0aG9kIHRvIGNyZWF0ZSB0aGUgaW5pdGlhbCBzdGF0ZVxuICogQHJldHVybnMgVGhlIGN1cnJlbnQgc3RhdGUgYW5kIGEgbWV0aG9kIHdpdGggd2hpY2ggdG8gbW9kaWZ5IGl0XG4gKi9cbmNvbnN0IHVzZVJlZHVjZXIgPSAocmVkdWNlcjogKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiBhbnksIGluaXRpYWxTdGF0ZTogYW55LCBpbml0OiAoc3RhdGU6IGFueSkgPT4gYW55KTogW2FueSwgKGFjdGlvbjogYW55KSA9PiBhbnldID0+IHtcblx0Y29uc3QgY2FsbElkID0gaW5jcmVtZW50Q2FsbHMoKTtcblxuXHRjb25zdCB7IGRhdGEgfSA9IHN0b3JhZ2U7XG5cblx0aWYgKGRhdGFbY2FsbElkXSkgcmV0dXJuIGRhdGFbY2FsbElkXTtcblxuXHRjb25zdCBkaXNwYXRjaCA9IChhY3Rpb246IGFueSkgPT4ge1xuXHRcdGRhdGFbY2FsbElkXVswXSA9IHJlZHVjZXIoZGF0YVtjYWxsSWRdWzBdLCBhY3Rpb24pO1xuXHR9O1xuXG5cdGNvbnN0IHN0YXRlOiBbYW55LCAoYWN0aW9uOiBhbnkpID0+IGFueV0gPSBbaW5pdCA/IGluaXQoaW5pdGlhbFN0YXRlKSA6IGluaXRpYWxTdGF0ZSwgZGlzcGF0Y2hdO1xuXHRkYXRhW2NhbGxJZF0gPSBzdGF0ZTtcblx0cmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVkdWNlcjtcbiJdfQ==