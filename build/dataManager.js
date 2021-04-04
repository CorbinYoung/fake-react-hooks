"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearData = exports.resetCalls = exports.incrementCalls = exports.storage = void 0;
// This is the substitute for React that manages all of the states for every hook in one "component"
const storage = {
  data: [],
  hasUnmount: []
};
exports.storage = storage;
let calls = -1; // Each new hook will need to call this to make sure it has it's own index in the data array

const incrementCalls = () => ++calls; // This will be called any time a hook "rerenders" to update everything in data


exports.incrementCalls = incrementCalls;

const resetCalls = () => {
  calls = -1;
};
/** Put afterEach(clearData) at top of any test file that uses multiple tests
 * 	so that you get a fresh version of data with every test.
 *
 * This method is akin to unmouning the React component using this hook
 */


exports.resetCalls = resetCalls;

const clearData = () => {
  storage.data.splice(0, storage.data.length);
  storage.hasUnmount.splice(0, storage.hasUnmount.length);
  calls = -1;
};

exports.clearData = clearData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6WyJzdG9yYWdlIiwiZGF0YSIsImhhc1VubW91bnQiLCJjYWxscyIsImluY3JlbWVudENhbGxzIiwicmVzZXRDYWxscyIsImNsZWFyRGF0YSIsInNwbGljZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7QUFDTyxNQUFNQSxPQUFnQixHQUFHO0FBQUVDLEVBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLEVBQUFBLFVBQVUsRUFBRTtBQUF4QixDQUF6Qjs7QUFDUCxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFiLEMsQ0FFQTs7QUFDTyxNQUFNQyxjQUFjLEdBQUcsTUFBTSxFQUFFRCxLQUEvQixDLENBRVA7Ozs7O0FBQ08sTUFBTUUsVUFBVSxHQUFHLE1BQU07QUFDL0JGLEVBQUFBLEtBQUssR0FBRyxDQUFDLENBQVQ7QUFDQSxDQUZNO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxNQUFNRyxTQUFTLEdBQUcsTUFBTTtBQUM5Qk4sRUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWFNLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJQLE9BQU8sQ0FBQ0MsSUFBUixDQUFhTyxNQUFwQztBQUNBUixFQUFBQSxPQUFPLENBQUNFLFVBQVIsQ0FBbUJLLE1BQW5CLENBQTBCLENBQTFCLEVBQTZCUCxPQUFPLENBQUNFLFVBQVIsQ0FBbUJNLE1BQWhEO0FBQ0FMLEVBQUFBLEtBQUssR0FBRyxDQUFDLENBQVQ7QUFDQSxDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN0b3JhZ2Uge1xuICBkYXRhOiBhbnlbXSxcbiAgaGFzVW5tb3VudDogbnVtYmVyW11cbn1cblxuLy8gVGhpcyBpcyB0aGUgc3Vic3RpdHV0ZSBmb3IgUmVhY3QgdGhhdCBtYW5hZ2VzIGFsbCBvZiB0aGUgc3RhdGVzIGZvciBldmVyeSBob29rIGluIG9uZSBcImNvbXBvbmVudFwiXG5leHBvcnQgY29uc3Qgc3RvcmFnZTogU3RvcmFnZSA9IHsgZGF0YTogW10sIGhhc1VubW91bnQ6IFtdIH07XG5sZXQgY2FsbHMgPSAtMTtcblxuLy8gRWFjaCBuZXcgaG9vayB3aWxsIG5lZWQgdG8gY2FsbCB0aGlzIHRvIG1ha2Ugc3VyZSBpdCBoYXMgaXQncyBvd24gaW5kZXggaW4gdGhlIGRhdGEgYXJyYXlcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRDYWxscyA9ICgpID0+ICsrY2FsbHM7XG5cbi8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYSBob29rIFwicmVyZW5kZXJzXCIgdG8gdXBkYXRlIGV2ZXJ5dGhpbmcgaW4gZGF0YVxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FsbHMgPSAoKSA9PiB7XG5cdGNhbGxzID0gLTE7XG59O1xuXG4vKiogUHV0IGFmdGVyRWFjaChjbGVhckRhdGEpIGF0IHRvcCBvZiBhbnkgdGVzdCBmaWxlIHRoYXQgdXNlcyBtdWx0aXBsZSB0ZXN0c1xuICogXHRzbyB0aGF0IHlvdSBnZXQgYSBmcmVzaCB2ZXJzaW9uIG9mIGRhdGEgd2l0aCBldmVyeSB0ZXN0LlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIGFraW4gdG8gdW5tb3VuaW5nIHRoZSBSZWFjdCBjb21wb25lbnQgdXNpbmcgdGhpcyBob29rXG4gKi9cbmV4cG9ydCBjb25zdCBjbGVhckRhdGEgPSAoKSA9PiB7XG5cdHN0b3JhZ2UuZGF0YS5zcGxpY2UoMCwgc3RvcmFnZS5kYXRhLmxlbmd0aCk7XG5cdHN0b3JhZ2UuaGFzVW5tb3VudC5zcGxpY2UoMCwgc3RvcmFnZS5oYXNVbm1vdW50Lmxlbmd0aCk7XG5cdGNhbGxzID0gLTE7XG59O1xuIl19