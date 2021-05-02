"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _list = require("../styled-components/pages/list");

var _global = require("../styled-components/global");

var _blogs = _interopRequireDefault(require("../data/blogs"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "deleteBlog", function (e, id, title) {
      e.preventDefault();

      if (window.confirm('Are you sure you want to delete the blog titled: ' + title + "?")) {
        fetch('/api/blogs/delete/' + id).then(function (res) {
          if (res.status === 200) return res.json();else return {};
        }).then(function (data) {
          _this.getBlogs();
        })["catch"](function (err) {
          console.log("login err", err);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getBlogs", function () {
      fetch('/api/blogs/getAll').then(function (res) {
        if (res.status === 200) return res.json();else return {};
      }).then(function (blogs) {
        if (blogs) {
          _this.setState({
            blogs: blogs
          });
        }
      })["catch"](function (err) {
        console.log("login err", err);
      });
    });

    _this.state = {
      blogs: []
    };
    return _this;
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // fetch('/api/getMe')
      // .then((res) => {
      //   if(res.status === 200) return res.json();
      //   else return {}
      // })
      // .then((data) => {
      //   if(!data){
      //     window.location.href = "/"
      //   }
      // })
      // .catch((err) => {
      //   console.log("login err", err);
      // })
      this.getBlogs();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var blogs = this.state.blogs;
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement(_list.ListContent, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/new"
      }, /*#__PURE__*/_react["default"].createElement(_global.RedButton, null, "Create New Blog")), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Title"), /*#__PURE__*/_react["default"].createElement("th", null, "Date"), /*#__PURE__*/_react["default"].createElement("th", null, "Author"), /*#__PURE__*/_react["default"].createElement("th", null, "Categories"), /*#__PURE__*/_react["default"].createElement("th", null, "Edit"), /*#__PURE__*/_react["default"].createElement("th", null, "Delete")), blogs.length ? blogs.map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: a
        }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("a", {
          href: '/edit/' + a._id
        }, a.title)), /*#__PURE__*/_react["default"].createElement("td", null, a.date), /*#__PURE__*/_react["default"].createElement("td", null, a.author), /*#__PURE__*/_react["default"].createElement("td", null, a.categories.join(', ')), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("a", {
          href: '/edit/' + a._id
        }, /*#__PURE__*/_react["default"].createElement(_global.GoldButton, null, "Edit"))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("a", {
          href: "",
          onClick: function onClick(e) {
            _this2.deleteBlog(e, a._id, a.title);
          }
        }, /*#__PURE__*/_react["default"].createElement(_global.GoldButton, null, "Delete"))));
      }) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "No Blogs To Be Found"), /*#__PURE__*/_react["default"].createElement("td", null, "--"), /*#__PURE__*/_react["default"].createElement("td", null, "--"), /*#__PURE__*/_react["default"].createElement("td", null, "--"), /*#__PURE__*/_react["default"].createElement("td", null, "--"), /*#__PURE__*/_react["default"].createElement("td", null, "--"))))));
    }
  }]);

  return List;
}(_react.Component);

var _default = List;
exports["default"] = _default;