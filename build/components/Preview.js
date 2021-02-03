"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _preview = require("../styled-components/components/preview");

var _global = require("../styled-components/global");

var _mapBlog = _interopRequireDefault(require("../helpers/mapBlog"));

var _mapPage = _interopRequireDefault(require("../helpers/mapPage"));

var _blogs = _interopRequireDefault(require("../data/blogs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var PreviewComponent = /*#__PURE__*/function (_Component) {
  _inherits(PreviewComponent, _Component);

  var _super = _createSuper(PreviewComponent);

  function PreviewComponent() {
    _classCallCheck(this, PreviewComponent);

    return _super.apply(this, arguments);
  }

  _createClass(PreviewComponent, [{
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
          date = _this$props$blog.date;
      return /*#__PURE__*/_react["default"].createElement(_preview.Preview, null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "previewTop"
      }, "Previews"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h2", {
        className: "previewHeader"
      }, "Blog Page"), /*#__PURE__*/_react["default"].createElement(_global.Content, {
        className: "previewBlock"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, title), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/"
      }, author), " | ", date, " | ", categories.join(', ')), (0, _mapPage["default"])(content), /*#__PURE__*/_react["default"].createElement(_.BlogSocial, {
        share: share
      })), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h2", {
        className: "previewHeader"
      }, "Blog Main Page"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "previewBlock"
      }, (0, _mapBlog["default"])([blog].concat(_toConsumableArray(_blogs["default"])))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h2", {
        className: "previewHeader"
      }, "Side Bar"), /*#__PURE__*/_react["default"].createElement(_preview.BottomBox, {
        className: "previewBlock",
        style: {
          maxWidth: "300px"
        }
      }, /*#__PURE__*/_react["default"].createElement(_preview.BoxTitle, null, "VISIT OUR BLOG"), /*#__PURE__*/_react["default"].createElement(_preview.BoxContent, null, [blog].concat(_toConsumableArray(_blogs["default"])).slice(0, 2).map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          key: i,
          href: a.link
        }, a.title);
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/blog",
        className: "readMore"
      }, /*#__PURE__*/_react["default"].createElement("div", null, "Read More ", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-chevron-circle-right"
      }))))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h2", {
        className: "previewHeader"
      }, "Responsive Bottom Section"), /*#__PURE__*/_react["default"].createElement(_preview.BottomBox, {
        className: "previewBlock"
      }, /*#__PURE__*/_react["default"].createElement(_preview.BoxTitle, null, "VISIT OUR BLOG"), /*#__PURE__*/_react["default"].createElement(_preview.BoxContent, null, [blog].concat(_toConsumableArray(_blogs["default"])).slice(0, 2).map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          key: i,
          href: a.link
        }, a.title);
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/blog",
        className: "readMore"
      }, /*#__PURE__*/_react["default"].createElement("div", null, "Read More ", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-chevron-circle-right"
      }))))), /*#__PURE__*/_react["default"].createElement("hr", null));
    }
  }]);

  return PreviewComponent;
}(_react.Component);

var _default = PreviewComponent;
exports["default"] = _default;