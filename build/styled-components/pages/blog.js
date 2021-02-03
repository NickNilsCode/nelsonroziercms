"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogDiv = exports.CategoryButton = exports.CategoryFlex = exports.ContactLinks = exports.MessageLinks = exports.MessageForm = exports.MessageFormWrap = exports.NewContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n  text-align: left;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 12px 16px;\n  margin: 6px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  background-color: #fff;\n  color: #8d8d8d;\n  &.selectedCategory {\n    background-color: #e0e0e0;\n  }\n  &:hover {\n    background-color: #e0e0e0;\n    opacity: 0.8;\n    cursor: pointer;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 12px auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  a {\n    color: #833634;\n    text-decoration: underline;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  a {\n    color: #fff;\n    text-decoration: underline;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  padding: 24px;\n  max-width: 900px;\n  margin: auto;\n  h2 {\n    width: 100%;\n    font-size: 29px;\n    text-align: center;\n  }\n  .buttonDisabled {\n    filter: grayscale(100%);\n  }\n  @media(min-width: 900px){\n    h2 {\n      font-size: 40px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 387px;\n  background-image: url(\"/images/bg-container-short-form-wrap.jpg\");\n  background-position: center;\n  background-size: cover;\n  color: #fff;\n"]);

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

var NewContent = _styledComponents["default"].div(_templateObject());

exports.NewContent = NewContent;

var MessageFormWrap = _styledComponents["default"].div(_templateObject2());

exports.MessageFormWrap = MessageFormWrap;

var MessageForm = _styledComponents["default"].div(_templateObject3());

exports.MessageForm = MessageForm;

var MessageLinks = _styledComponents["default"].div(_templateObject4());

exports.MessageLinks = MessageLinks;

var ContactLinks = _styledComponents["default"].div(_templateObject5());

exports.ContactLinks = ContactLinks;

var CategoryFlex = _styledComponents["default"].div(_templateObject6());

exports.CategoryFlex = CategoryFlex;

var CategoryButton = _styledComponents["default"].div(_templateObject7());

exports.CategoryButton = CategoryButton;

var BlogDiv = _styledComponents["default"].div(_templateObject8());

exports.BlogDiv = BlogDiv;