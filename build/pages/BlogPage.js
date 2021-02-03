"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

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

var BlogPage = /*#__PURE__*/function (_Component) {
  _inherits(BlogPage, _Component);

  var _super = _createSuper(BlogPage);

  function BlogPage(props) {
    var _this;

    _classCallCheck(this, BlogPage);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "submitForm", function (e) {
      e.preventDefault();
      console.log(_this.state);
      fetch('/emailer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_this.state)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        window.location.href = "/list";
      })["catch"](function (err) {
        alert("Something went wrong. Please contact Nelson Rozier directly via email or telephone. We are sorry for the inconvenience.");
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (e, prop) {
      var obj = {};

      if (prop == "title") {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        var dashTitle = e.currentTarget.value.split(" ").join("-");
        obj["link"] = "/blog/".concat(year, "/").concat(month, "/").concat(dashTitle);
      }

      obj[prop] = e.currentTarget.value;
      console.log(obj);

      _this.setState(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "updateShare", function (e, prop) {
      var obj = {
        share: {}
      };
      obj.share[prop] = e.currentTarget.value;

      _this.setState(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "updateAuthor", function (author) {
      _this.setState({
        author: author
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateCategories", function (value) {
      var categories = _this.state.categories;
      var index = categories.findIndex(function (a) {
        return a == value;
      });
      if (index != -1) categories.splice(index, 1);else categories.push(value);

      _this.setState({
        categories: categories
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateContent", function (i, value) {
      var val = _this.state.content;
      val[i].content = value;

      _this.setState({
        content: val
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addContent", function () {
      var arr = _this.state.content;
      arr.push({
        type: "h1",
        content: ""
      });

      _this.setState({
        content: arr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteContent", function (i) {
      var arr = _this.state.content;
      arr.splice(i, 1);

      _this.setState({
        content: arr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateType", function (i, value) {
      var val = _this.state.content;
      val[i].type = value;

      _this.setState({
        content: val
      });
    });

    _this.state = {
      _id: "",
      title: "",
      categories: [],
      author: "",
      date: new Date().toLocaleString('en-US'),
      link: "",
      share: {
        facebook: "",
        twitter: "",
        linkedin: ""
      },
      blurb: "",
      content: [{
        type: "h2",
        content: ""
      }]
    };
    return _this;
  }

  _createClass(BlogPage, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          title = _this$state.title,
          categories = _this$state.categories,
          author = _this$state.author,
          facebook = _this$state.facebook,
          twitter = _this$state.twitter,
          linkedin = _this$state.linkedin,
          blurb = _this$state.blurb,
          content = _this$state.content;
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement("h1", null, "New Blog"), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.submitForm
      }, /*#__PURE__*/_react["default"].createElement(_components.BlogForm, {
        blog: this.state,
        updateState: this.updateState,
        updateShare: this.updateShare,
        updateAuthor: this.updateAuthor,
        updateCategories: this.updateCategories,
        submitForm: this.submitForm,
        updateContent: this.updateContent,
        addContent: this.addContent,
        deleteContent: this.deleteContent,
        updateType: this.updateType
      }), /*#__PURE__*/_react["default"].createElement(_global.BigGoldButton, {
        type: "submit"
      }, "Save Blog"))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_components.Preview, {
        blog: this.state
      }), /*#__PURE__*/_react["default"].createElement(_global.BigGoldButton, {
        type: "submit"
      }, "Save Blog"));
    }
  }]);

  return BlogPage;
}(_react.Component);

var _default = BlogPage;
exports["default"] = _default;