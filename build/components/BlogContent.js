"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _blogform = require("../styled-components/components/blogform");

var _blogcontent = require("../styled-components/components/blogcontent");

var _global = require("../styled-components/global");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BlogContentComponent = /*#__PURE__*/function (_Component) {
  _inherits(BlogContentComponent, _Component);

  var _super = _createSuper(BlogContentComponent);

  function BlogContentComponent(props) {
    var _this;

    _classCallCheck(this, BlogContentComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "selectContent", function (e) {
      if (e.target.selectionStart != e.target.selectionEnd) {
        _this.setState({
          selectedContent: [e.target.selectionStart, e.target.selectionEnd + 1]
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addAnchor", function (e) {
      var selectedContent = _this.state.selectedContent;

      if (typeof selectedContent[0] == "number" && typeof selectedContent[1] == "number" && selectedContent[0] != selectedContent[1]) {
        var _this$props = _this.props,
            content = _this$props.content,
            updateContent = _this$props.updateContent,
            index = _this$props.index;
        var newContent = content.content.split("");
        var link = prompt("copy and paste the link url here.");
        newContent.splice(selectedContent[0], 0, "<a href=\"".concat(link, "\">"));
        newContent.splice(selectedContent[1], 0, "</a>");
        updateContent(index, newContent.join(''));

        _this.setState({
          selectedContent: ["", ""]
        });
      } else {
        alert("Make a selection! Highlight what you want to link.");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addBold", function (e) {
      var selectedContent = _this.state.selectedContent;

      if (typeof selectedContent[0] == "number" && typeof selectedContent[1] == "number" && selectedContent[0] != selectedContent[1]) {
        var _this$props2 = _this.props,
            content = _this$props2.content,
            updateContent = _this$props2.updateContent,
            index = _this$props2.index;
        var _selectedContent = _this.state.selectedContent;
        var newContent = content.content.split("");
        newContent.splice(_selectedContent[0], 0, "<strong>");
        newContent.splice(_selectedContent[1], 0, "</strong>");
        updateContent(index, newContent.join(''));

        _this.setState({
          selectedContent: ["", ""]
        });
      } else {
        alert("Make a selection! Highlight what you want to bold.");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addBullet", function (e) {
      var selectedContent = _this.state.selectedContent;

      if (typeof selectedContent[0] == "number" && typeof selectedContent[1] == "number" && selectedContent[0] != selectedContent[1]) {
        var _this$props3 = _this.props,
            content = _this$props3.content,
            updateContent = _this$props3.updateContent,
            index = _this$props3.index;
        var _selectedContent2 = _this.state.selectedContent;
        var newContent = content.content.split("");
        newContent.splice(_selectedContent2[0], 0, "<li>");
        newContent.splice(_selectedContent2[1], 0, "</li>");
        updateContent(index, newContent.join(''));

        _this.setState({
          selectedContent: ["", ""]
        });
      } else {
        alert("Make a selection! Highlight what you want to turn into a list item.");
      }
    });

    _this.state = {
      selectedContent: ["", ""]
    };
    return _this;
  }

  _createClass(BlogContentComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          content = _this$props4.content,
          updateContent = _this$props4.updateContent,
          deleteContent = _this$props4.deleteContent,
          updateType = _this$props4.updateType,
          index = _this$props4.index;
      return /*#__PURE__*/_react["default"].createElement(_blogcontent.BlogContent, null, /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, {
        style: {
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_blogform.SelectButton, {
        className: content.type == "h2" ? "selectedCategory" : "",
        onClick: function onClick() {
          updateType(index, "h2");
        }
      }, "Header"), /*#__PURE__*/_react["default"].createElement(_blogform.SelectButton, {
        className: content.type == "p" ? "selectedCategory" : "",
        onClick: function onClick() {
          updateType(index, "p");
        }
      }, "Paragraph"), /*#__PURE__*/_react["default"].createElement(_blogform.SelectButton, {
        className: content.type == "ul" ? "selectedCategory" : "",
        onClick: function onClick() {
          updateType(index, "ul");
        }
      }, "List")), /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_blogform.SelectButton, {
        color: "#fff",
        primary: true,
        title: "Make it Bold. Highlight the text you want to make bold.",
        onClick: function onClick(e) {
          return _this2.addBold(e);
        }
      }, "Bold"), /*#__PURE__*/_react["default"].createElement(_blogform.SelectButton, {
        primary: true,
        title: "Make a Link. Highlight the text you want to link.",
        onClick: function onClick(e) {
          return _this2.addAnchor(e);
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-link"
      })), /*#__PURE__*/_react["default"].createElement(_blogform.SelectButton, {
        primary: true,
        title: "Create bullet point for lists. Highlight the text you want to turn into bullet point.",
        onClick: function onClick(e) {
          return _this2.addBullet(e);
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-list"
      }))), /*#__PURE__*/_react["default"].createElement(_blogform.SelectButton, {
        onClick: function onClick() {
          deleteContent(i);
        }
      }, "Delete")), /*#__PURE__*/_react["default"].createElement(_global.TextArea, {
        value: content.content,
        onSelect: this.selectContent,
        onChange: function onChange(e) {
          updateContent(index, e.currentTarget.value);
        },
        id: 'content-textarea-' + index
      }));
    }
  }]);

  return BlogContentComponent;
}(_react.Component);

var _default = BlogContentComponent;
exports["default"] = _default;