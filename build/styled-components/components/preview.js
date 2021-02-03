"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxContent = exports.BoxTitle = exports.BottomBox = exports.Preview = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  border-top: 1px solid #dfdfdf;\n  padding: 8px;\n  a {\n    text-decoration: underline;\n    display: block;\n    color: #333;\n    font-size: 15px;\n    line-height: 27px;\n    font-weight: 700;\n    text-align: left;\n    margin-bottom: 13px;\n  }\n  .readMore {\n    text-decoration: none;\n    margin-top: 12px;\n  }\n  i {\n    color: {red};\n  }\n  a:hover i {\n    color: #333;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 3px 0;\n  width: calc(100% - 8px);\n  color: #fff;\n  border: 4px solid #fff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #dfdfdf;\n  box-sizing: border-box;\n  border-collapse: collapse;\n  width: 100%;\n  margin-top: 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  hr {\n    margin: 36px 0;\n  }\n  h2.previewHeader {\n    background-color: #8d8d8d8d;\n    padding: 12px 0;\n  }\n  h2.previewTop {\n    background-color: #000;\n    padding: 12px 0;\n    color: #fff;\n  }\n  .previewBlock {\n    width: calc(100% - 32px);\n    padding: 40px 16px;\n    max-width: 900px;\n    margin: auto;\n    text-align: center;\n    position: relative;\n    display: block;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Preview = _styledComponents["default"].div(_templateObject());

exports.Preview = Preview;

var BottomBox = _styledComponents["default"].div(_templateObject2());

exports.BottomBox = BottomBox;

var BoxTitle = _styledComponents["default"].div(_templateObject3(), _colors.red);

exports.BoxTitle = BoxTitle;

var BoxContent = _styledComponents["default"].div(_templateObject4());

exports.BoxContent = BoxContent;