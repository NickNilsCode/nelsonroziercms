"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cryptr = _interopRequireDefault(require("cryptr"));

var _config = _interopRequireDefault(require("./config"));

var _passport2 = _interopRequireDefault(require("./config/passport"));

var _userCtrl = _interopRequireDefault(require("./controllers/userCtrl"));

var _blogCtrl = _interopRequireDefault(require("./controllers/blogCtrl"));

var _roots = require("./roots");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cryptr = new _cryptr["default"](_config["default"].key);
var PORT = process.env.PORT || 3003;
(0, _passport2["default"])(_passport["default"]);
var app = (0, _express["default"])();
app.use((0, _expressSession["default"])({
  secret: 'banana',
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    loginBundle = "",
    listBundle = "",
    blogBundle = "";

_fs["default"].readFile('./dist/js/login.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  loginBundle = data || "";
});

_fs["default"].readFile('./dist/js/list.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  listBundle = data || "";
});

_fs["default"].readFile('./dist/js/blog.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  blogBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, _roots.LoginRoot, "login"));
});
app.get('/login', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, _roots.LoginRoot, "login"));
});
app.get('/list', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, listBundle, _roots.ListRoot, "list"));
});
app.get('/new', function (req, res) {
  var data = {
    id: "",
    edit: false
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "new"));
});
app.get('/edit/:id', function (req, res) {
  var data = {
    id: req.params.id,
    edit: true
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "edit"));
});
;
app.get('/api/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/api/auth', _passport["default"].authenticate('local-login'), _userCtrl["default"].login);
app.post('/api/signup', _passport["default"].authenticate('local-signup'), _userCtrl["default"].login);
app.get('/api/getMe', _userCtrl["default"].getMe);
app.get('/api/logout', _userCtrl["default"].logout);
app.get('/api/users', _userCtrl["default"].read);
app.get('/api/blogs/getAll', _blogCtrl["default"].read);
app.get('/api/blogs/getThree', _blogCtrl["default"].readThree);
app.get('/api/blogs/getOne/:id', _blogCtrl["default"].readOne);
app.post('/api/blogs/add', _blogCtrl["default"].create);
app.put('/api/blogs/update/:id', _blogCtrl["default"].update);
app.get('/api/blogs/delete/:id', _blogCtrl["default"].destroy);
app.get('/health', function (req, res) {
  return res.send('OK');
});
console.log("crash", process.env.MONGODB_URI);
var mongoUri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://' + cryptr.decrypt(_config["default"].dbuser) + ':' + cryptr.decrypt(_config["default"].dbpass) + '@nelsonrozier.1dnpj.mongodb.net/nelsonrozier?retryWrites=true&w=majority';

_mongoose["default"].connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].connection.on('error', console.error.bind(console, 'connection error'));

_mongoose["default"].connection.once('open', function () {
  console.log("Connected to mongoDB");
});

app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>".concat(title, "</title>\n                <meta name=\"Description\" content=\"").concat(title, "\">\n                <style>\n                  body { margin: 0; font-family: 'PT Sans'; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n                <link href=\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Open+Sans:wght@700&family=PT+Sans&display=swap\" rel=\"stylesheet\">\n                <script src=\"https://kit.fontawesome.com/7fa747235e.js\" crossorigin=\"anonymous\"></script>\n\n                ").concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}
