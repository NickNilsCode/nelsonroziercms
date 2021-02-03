"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(pageData) {
  return pageData.map(function (a, i) {
    var A = a.type;

    if (a.content) {
      return /*#__PURE__*/_react["default"].createElement(A, {
        key: i,
        className: a.className,
        dangerouslySetInnerHTML: {
          __html: a.content
        }
      });
    } else {
      return /*#__PURE__*/_react["default"].createElement(A, {
        key: i,
        className: a.className
      });
    }
  });
}