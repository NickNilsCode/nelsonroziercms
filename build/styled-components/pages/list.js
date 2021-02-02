"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: right;\n  a {\n    color: ", ";\n    transition: color 300ms ease 0ms;\n    text-decoration: underline;\n  }\n  a:hover {\n    color: ", ";\n  }\n  table {\n    border-collapse: collapse;\n  }\n  td, th {\n    text-align: left;\n    padding: 12px 16px;\n    border: 1px solid #8d8d8d;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListContent = _styledComponents["default"].div(_templateObject(), _colors.red, _colors.gold);

exports.ListContent = ListContent;