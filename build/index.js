"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useFakeMemo", {
  enumerable: true,
  get: function () {
    return _useMemo.default;
  }
});
Object.defineProperty(exports, "useFakeState", {
  enumerable: true,
  get: function () {
    return _useState.default;
  }
});
Object.defineProperty(exports, "useFakeEffect", {
  enumerable: true,
  get: function () {
    return _useEffect.default;
  }
});
Object.defineProperty(exports, "useFakeReducer", {
  enumerable: true,
  get: function () {
    return _useReducer.default;
  }
});
Object.defineProperty(exports, "useFakeCallback", {
  enumerable: true,
  get: function () {
    return _useCallback.default;
  }
});
Object.defineProperty(exports, "clearData", {
  enumerable: true,
  get: function () {
    return _dataManager.clearData;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _renderer.render;
  }
});
Object.defineProperty(exports, "rerender", {
  enumerable: true,
  get: function () {
    return _renderer.rerender;
  }
});
Object.defineProperty(exports, "act", {
  enumerable: true,
  get: function () {
    return _renderer.act;
  }
});
Object.defineProperty(exports, "unmount", {
  enumerable: true,
  get: function () {
    return _renderer.unmount;
  }
});

var _useMemo = _interopRequireDefault(require("./fakeReactHooks/useMemo"));

var _useState = _interopRequireDefault(require("./fakeReactHooks/useState"));

var _useEffect = _interopRequireDefault(require("./fakeReactHooks/useEffect"));

var _useReducer = _interopRequireDefault(require("./fakeReactHooks/useReducer"));

var _useCallback = _interopRequireDefault(require("./fakeReactHooks/useCallback"));

var _dataManager = require("./dataManager");

var _renderer = require("./renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7ZGVmYXVsdCBhcyB1c2VGYWtlTWVtbyB9IGZyb20gJy4vZmFrZVJlYWN0SG9va3MvdXNlTWVtbyc7XG5leHBvcnQge2RlZmF1bHQgYXMgdXNlRmFrZVN0YXRlIH0gZnJvbSAnLi9mYWtlUmVhY3RIb29rcy91c2VTdGF0ZSc7XG5leHBvcnQge2RlZmF1bHQgYXMgdXNlRmFrZUVmZmVjdCB9IGZyb20gJy4vZmFrZVJlYWN0SG9va3MvdXNlRWZmZWN0JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyB1c2VGYWtlUmVkdWNlciB9IGZyb20gJy4vZmFrZVJlYWN0SG9va3MvdXNlUmVkdWNlcic7XG5leHBvcnQge2RlZmF1bHQgYXMgdXNlRmFrZUNhbGxiYWNrIH0gZnJvbSAnLi9mYWtlUmVhY3RIb29rcy91c2VDYWxsYmFjayc7XG5leHBvcnQgeyBjbGVhckRhdGEgfSBmcm9tICcuL2RhdGFNYW5hZ2VyJztcbmV4cG9ydCB7IHJlbmRlciwgcmVyZW5kZXIsIGFjdCwgdW5tb3VudCB9IGZyb20gJy4vcmVuZGVyZXInO1xuIl19