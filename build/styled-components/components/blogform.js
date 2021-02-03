"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectButton = exports.BlogForm = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 12px 16px;\n  margin: 0 6px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  background-color: #fff;\n  color: #8d8d8d;\n  width: max-content;\n  &.selectedCategory {\n    background-color: #e0e0e0;\n  }\n  &:hover {\n    background-color: #e0e0e0;\n    opacity: 0.8;\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogForm = _styledComponents["default"].div(_templateObject());

exports.BlogForm = BlogForm;

var SelectButton = _styledComponents["default"].div(_templateObject2());

exports.SelectButton = SelectButton;