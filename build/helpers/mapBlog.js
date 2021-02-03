"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _blog = require("../styled-components/pages/blog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(blogData) {
  return blogData.map(function (a, ai) {
    var author = a.author == "On behalf of Nelson & Rozier" ? a.author : "by " + a.author;
    return /*#__PURE__*/_react["default"].createElement(_blog.BlogDiv, {
      key: ai
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: a.link
    }, /*#__PURE__*/_react["default"].createElement("h2", null, a.title)), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/"
    }, author), " | ", a.date, " | ", a.categories.map(function (b, bi) {
      return /*#__PURE__*/_react["default"].createElement("a", {
        key: bi,
        href: "/blog/".concat(b)
      }, b);
    })), /*#__PURE__*/_react["default"].createElement("p", {
      className: "ellipsisContent"
    }, a.blurb), /*#__PURE__*/_react["default"].createElement("a", {
      href: a.link
    }, "read more"));
  });
}