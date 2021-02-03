"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexDiv = exports.HalfSize = exports.TextArea = exports.Input = exports.FBButton = exports.RedButton = exports.BigGoldButton = exports.GoldButton = exports.Content = exports.ContentWrapper = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("./colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: ", ";\n  justify-content: space-between;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 900px){\n    width: 444px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 12px;\n  width: 100%;\n  height: 174px;\n  margin: 12px 0;\n  font-size: 16px;\n  border: 1px solid #8d8d8d;\n  border-radius: 1px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 12px;\n  width: 100%;\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  border: 1px solid #8d8d8d;\n  border-radius: 1px;\n  line-height: 1.5;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background-color: #3b5998;\n  border-radius: 3px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  transition: background-color 300ms ease 0ms;\n  display: block;\n  i {\n    color: #fff;\n    font-size: 16px;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #4674b5;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 5px 15px;\n  margin: 24px 0 8px 0;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600px;\n  border: none;\n  line-height: 26px;\n  width: max-content;\n  transition: background-color 300ms ease 0ms;\n  &:hover {\n    cursor: pointer;\n    background-color: #000;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px 20px;\n  margin: 12px auto;\n  color: #7c3230;\n  font-size: 19px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  transition: background-color 300ms ease 0ms;\n  &:hover {\n    cursor: pointer;\n    background-color: #7c3230;\n    color: #fff;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px 20px;\n  margin: 12px auto;\n  color: #fff;\n  font-size: 17px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: max-content;\n  transition: background-color 300ms ease 0ms;\n  &:hover {\n    cursor: pointer;\n    background-color: #7c3230;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  p, ul, li, .goldBack {\n    text-align: left;\n    font-size: 17px;\n    font-weight: 400;\n    line-height: 27px;\n  }\n  h1 {\n    text-align: left;\n    font-size: 25px;\n    font-weight: 700;\n    margin-bottom: 30px;\n  }\n  h2 {\n    text-align: left;\n    font-size: 24px;\n    font-weight: 700;\n    margin-bottom: 10px;\n  }\n  select {\n    background: #f7f7f7;\n    padding: 12px;\n    width: 100%;\n    margin: 0 0 12px 0;\n    font-size: 16px;\n    border: 1px solid #8d8d8d;\n    border-radius: 1px;\n    line-height: 1.5;\n  }\n  a {\n    color: ", ";\n    transition: color 300ms ease 0ms;\n    text-decoration: underline;\n  }\n  form {\n    input, textarea {\n      background: #f7f7f7;\n    }\n  }\n  a:hover {\n    color: ", ";\n  }\n  .goldBack {\n    background-color: ", ";\n    color: #fff;\n    padding: 20px;\n  }\n  .boxedList {\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n    padding-left: 24px;\n    margin: 12px 0;\n    border: 1px solid #000;\n    @media (min-width: 600px){\n      flex-wrap: wrap;\n      max-height: 300px;\n      li {\n        width: calc(50% - 16px);\n      }\n    }\n  }\n  &.blogContent {\n    @media (min-width: 900px){\n      width: calc(100% - 277px - 85px);\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  padding: 40px 16px;\n  min-height: calc(100vh - 89px - 145px);\n  max-width: 900px;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  display: block;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content:space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageWrapper = _styledComponents["default"].div(_templateObject());

exports.PageWrapper = PageWrapper;

var ContentWrapper = _styledComponents["default"].div(_templateObject2());

exports.ContentWrapper = ContentWrapper;

var Content = _styledComponents["default"].div(_templateObject3(), _colors.red, _colors.gold, _colors.gold);

exports.Content = Content;

var GoldButton = _styledComponents["default"].button(_templateObject4(), _colors.gold);

exports.GoldButton = GoldButton;

var BigGoldButton = _styledComponents["default"].button(_templateObject5(), _colors.gold);

exports.BigGoldButton = BigGoldButton;

var RedButton = _styledComponents["default"].button(_templateObject6(), _colors.red);

exports.RedButton = RedButton;

var FBButton = _styledComponents["default"].button(_templateObject7());

exports.FBButton = FBButton;

var Input = _styledComponents["default"].input(_templateObject8());

exports.Input = Input;

var TextArea = _styledComponents["default"].textarea(_templateObject9());

exports.TextArea = TextArea;

var HalfSize = _styledComponents["default"].div(_templateObject10());

exports.HalfSize = HalfSize;

var FlexDiv = _styledComponents["default"].div(_templateObject11(), function (props) {
  return props.alignItems ? props.alignItems : "center";
});

exports.FlexDiv = FlexDiv;