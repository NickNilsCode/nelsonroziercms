"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _blogform = require("../styled-components/components/blogform");

var _blog = require("../styled-components/pages/blog");

var _global = require("../styled-components/global");

var _categories = _interopRequireDefault(require("../data/categories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var authorList = ["John Green", "Ryan Nelson", "Clayton Christenson", "On behalf of Nelson & Rozier"];

var BlogFormComponent = /*#__PURE__*/function (_Component) {
  _inherits(BlogFormComponent, _Component);

  var _super = _createSuper(BlogFormComponent);

  function BlogFormComponent() {
    _classCallCheck(this, BlogFormComponent);

    return _super.apply(this, arguments);
  }

  _createClass(BlogFormComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blog = _this$props.blog,
          _this$props$blog = _this$props.blog,
          title = _this$props$blog.title,
          categories = _this$props$blog.categories,
          author = _this$props$blog.author,
          share = _this$props$blog.share,
          _this$props$blog$shar = _this$props$blog.share,
          facebook = _this$props$blog$shar.facebook,
          linkedin = _this$props$blog$shar.linkedin,
          twitter = _this$props$blog$shar.twitter,
          blurb = _this$props$blog.blurb,
          content = _this$props$blog.content,
          date = _this$props$blog.date,
          updateState = _this$props.updateState,
          updateShare = _this$props.updateShare,
          updateAuthor = _this$props.updateAuthor,
          updateCategories = _this$props.updateCategories,
          submitForm = _this$props.submitForm,
          addContent = _this$props.addContent,
          updateContent = _this$props.updateContent,
          deleteContent = _this$props.deleteContent,
          updateType = _this$props.updateType;
      return /*#__PURE__*/_react["default"].createElement(_blogform.BlogForm, null, /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Title",
        type: "text",
        value: title,
        onChange: function onChange(e) {
          updateState(e, "title");
        }
      }), /*#__PURE__*/_react["default"].createElement(_global.TextArea, {
        placeholder: "Short Description",
        value: blurb,
        onChange: function onChange(e) {
          updateState(e, "blurb");
        }
      }), /*#__PURE__*/_react["default"].createElement("h2", null, "Authors"), /*#__PURE__*/_react["default"].createElement(_blog.CategoryFlex, null, authorList.map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
          key: i,
          onClick: function onClick() {
            updateAuthor(a);
          },
          className: author == a ? "selectedCategory" : ""
        }, a);
      })), /*#__PURE__*/_react["default"].createElement("h2", null, "Categories"), /*#__PURE__*/_react["default"].createElement(_blog.CategoryFlex, null, _categories["default"].map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
          key: i,
          onClick: function onClick() {
            return updateCategories(a.name);
          },
          className: categories.includes(a.name) ? "selectedCategory" : ""
        }, a.name);
      })), /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Facebook Link",
        type: "text",
        value: facebook,
        onChange: function onChange(e) {
          updateShare(e, "facebook");
        }
      }), /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Twitter Link",
        type: "text",
        value: twitter,
        onChange: function onChange(e) {
          updateShare(e, "twitter");
        }
      }), /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "LinkedIn Link",
        type: "text",
        value: linkedin,
        onChange: function onChange(e) {
          updateShare(e, "linkedin");
        }
      }), /*#__PURE__*/_react["default"].createElement("h2", null, "Content"), /*#__PURE__*/_react["default"].createElement(_.BlogContent, {
        blog: blog,
        addContent: addContent,
        deleteContent: deleteContent,
        updateContent: updateContent,
        updateType: updateType
      }), /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
        onClick: addContent
      }, "Add Content"));
    }
  }]);

  return BlogFormComponent;
}(_react.Component);

var _default = BlogFormComponent;
exports["default"] = _default;