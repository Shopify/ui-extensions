"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dev = dev;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _url = require("url");

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _utilities = require("./utilities");

var _browser = require("./browser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var LEGACY_POST_PURCHASE_DATA_PATH = '/data';
var WEBSOCKET_PATH = '/build';
var PUBLIC_PATH = '/assets/';

function dev() {
  return _dev.apply(this, arguments);
}

function _dev() {
  _dev = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var extension,
        _len,
        args,
        _key,
        config,
        extensionPoint,
        filename,
        port,
        scriptUrl,
        webpackConfiguration,
        compiler,
        firstCompilePromise,
        server,
        httpListenPromise,
        openUrl,
        opened,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            extension = (0, _utilities.loadExtension)();

            for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args[_key];
            }

            _context.next = 4;
            return (0, _utilities.parseDevelopmentServerConfig)(args);

          case 4:
            config = _context.sent;
            extensionPoint = config.extensionPoint, filename = config.filename, port = config.port, scriptUrl = config.scriptUrl, webpackConfiguration = config.webpackConfiguration;
            compiler = (0, _webpack["default"])(webpackConfiguration);
            firstCompilePromise = new Promise(function (resolve) {
              var hasResolved = false;
              compiler.hooks.done.tap('CheckoutUIExtensions.Compiled', function (stats) {
                if (stats.hasErrors()) {
                  (0, _utilities.log)("Build failed with errors: ".concat(stats.toString('errors-only')), {
                    error: true
                  });
                  return;
                }

                if (hasResolved) {
                  (0, _utilities.log)("Rebuilt your extension");
                } else {
                  hasResolved = true;
                  resolve();
                }
              });
            });
            server = new _webpackDevServer["default"](compiler, _objectSpread(_objectSpread({
              // webpack-dev-server injects a lot of things to the client
              // which are imcompatible with WebWorker environment.
              // It's also unnecessary because we have an alternative provided by
              // `@shopify/ui-extensions-webpack-hot-client/worker`
              injectClient: false,
              injectHot: false,
              // This makes local server public so that
              // it can be forwarded from ngrok
              host: '0.0.0.0',
              port: port,
              disableHostCheck: true,
              // `transportMode` switches to `ws` so that the worker file can use WebSocket
              // instead of default SocketJs in webpack-dev-server.
              // `sockPath` allows to override default path from webpack-dev-server.
              hot: false,
              hotOnly: false,
              liveReload: false,
              inline: false,
              transportMode: 'ws',
              sockPath: WEBSOCKET_PATH,
              publicPath: PUBLIC_PATH,
              before: function before(app) {
                app.get('/', function (req, res) {
                  var _req$headers$xForwar;

                  var protocol = (_req$headers$xForwar = req.headers['x-forwarded-proto']) !== null && _req$headers$xForwar !== void 0 ? _req$headers$xForwar : req.protocol;
                  var host = req.headers.host;
                  var origin = "".concat(protocol, "://").concat(host);
                  res.set('Content-Type', 'text/html');
                  res.set('Cache-Control', 'no-store');

                  function renderIndexPage(content) {
                    res.send("\n            <html>\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, height=device-height, viewport-fit=cover\">\n                <style>\n                  * {\n                    box-sizing: border-box;\n                  }\n\n                  body {\n                    min-height: 100vh;\n                    min-height: -webkit-fill-available;\n                    display: grid;\n                    margin: 0;\n                    align-content: center;\n                    justify-content: center;\n\n                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n                      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n                      sans-serif;\n                  }\n\n                  html {\n                    height: -webkit-fill-available;\n                    background: black;\n                    color: white;\n                  }\n\n                  .content {\n                    max-width: 40rem;\n                    padding: 2rem;\n                    font-size: 1.5em;\n                  }\n\n                  code {\n                    color: mediumseagreen;\n                    word-break: keep-all;\n                  }\n                </style>\n              </head>\n\n              <body>\n                <div class=\"content\">\n                  <p>\n                    This page is served by your local UI Extension development server. Instead of\n                    visiting this page directly, you will need to connect your local development\n                    environment to a real checkout environment.\n                  </p>\n                  <p>".concat(content, "</p>\n                </div>\n              </body>\n            </html>\n          "));
                  }

                  if (protocol === 'https') {
                    renderIndexPage("Create a checkout and append <code>?dev=".concat(origin, "/query</code> to the URL to start developing your extension."));
                  } else {
                    renderIndexPage("Make sure you have a secure URL for your local development server by running <code>shopify extension tunnel start --port=".concat(port, "</code>,\n            create a checkout, and append <code>?dev=https://TUNNEL_URL/query</code> to the URL, where <code>TUNNEL_URL</code> is\n            replaced with your own ngrok URL."));
                  }

                  res.end();
                }); // This endpoint is used by C1 to request information about the local workspace,
                // including what extensions are available locally, and how to connect to the
                // build server websocket for those extensions.

                app.get('/query', function (req, res) {
                  var _req$headers$xForwar2, _extension$config;

                  var protocol = (_req$headers$xForwar2 = req.headers['x-forwarded-proto']) !== null && _req$headers$xForwar2 !== void 0 ? _req$headers$xForwar2 : req.protocol;
                  var host = req.headers.host;
                  var origin = "".concat(protocol, "://").concat(host);
                  res.set('Access-Control-Allow-Origin', '*');
                  res.set('Cache-Control', 'no-cache');
                  res.json({
                    queryUrl: "".concat(origin).concat(req.path),
                    extensions: [{
                      scriptUrl: "".concat(origin).concat(PUBLIC_PATH).concat(filename),
                      socketUrl: "".concat(origin.replace(/^http/, 'ws')).concat(WEBSOCKET_PATH),
                      extensionPoints: extension.type === 'checkout' ? extension.config.extensionPoints : ['Checkout::PostPurchase::Render'],
                      metafields: ((_extension$config = extension.config) === null || _extension$config === void 0 ? void 0 : _extension$config.metafields) || []
                    }]
                  });
                }); // This endpoint powers a browser extension that was built for the
                // post-purchase extension:
                // https://github.com/Shopify/post-purchase-devtools/blob/master/src/background/background.ts#L16-L35

                app.get(LEGACY_POST_PURCHASE_DATA_PATH, function (_, res) {
                  res.set('Access-Control-Allow-Origin', '*');
                  res.json((0, _utilities.getLegacyPostPurchaseData)(scriptUrl.toString(), extension));
                });
              },
              historyApiFallback: {
                rewrites: [{
                  from: /./,
                  to: '/'
                }]
              }
            }, {
              logLevel: 'error'
            }), {}, {
              clientLogLevel: 'silent',
              stats: process.env.DEBUG === undefined ? false : 'verbose'
            }));
            (0, _utilities.log)("Starting dev server on port ".concat(port));
            httpListenPromise = new Promise(function (resolve, reject) {
              server.listen(Number(port), '0.0.0.0', function (error) {
                if (error) {
                  reject(error);
                } else {
                  resolve();
                }
              });
            });
            _context.next = 13;
            return Promise.all([firstCompilePromise, httpListenPromise]);

          case 13:
            printNextSteps({
              log: _utilities.log,
              config: config,
              extension: extension
            });
            openUrl = getOpenUrl(args);

            if (openUrl) {
              openUrl.searchParams.set('extension', JSON.stringify(scriptUrl));

              if (extensionPoint) {
                openUrl.searchParams.set('extension-point', extensionPoint);
              }

              opened = (0, _browser.openBrowser)(openUrl.href);

              if (opened) {
                (0, _utilities.log)("Opening a preview of your extension at ".concat(openUrl.href));
              } else {
                (0, _utilities.log)("You can see a preview of your extension at ".concat(openUrl.href));
              }
            }

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dev.apply(this, arguments);
}

function getOpenUrl(args) {
  var openArg = (0, _utilities.namedArgument)('open', args);
  return (openArg !== null && openArg !== void 0 ? openArg : '').startsWith('http') ? new _url.URL(openArg) : undefined;
}

function printNextSteps(_ref) {
  var log = _ref.log,
      _ref$config = _ref.config,
      passwordPageUrl = _ref$config.passwordPageUrl,
      permalinkUrl = _ref$config.permalinkUrl,
      port = _ref$config.port,
      publicUrl = _ref$config.publicUrl,
      scriptUrl = _ref$config.scriptUrl,
      extension = _ref.extension;
  var isPostPurchaseExtension = extension.type === 'post-purchase';
  log("Your extension is available at ".concat(scriptUrl));

  if (isPostPurchaseExtension) {
    log("You can append this query string: ".concat((0, _utilities.convertLegacyPostPurchaseDataToQueryString)((0, _utilities.getLegacyPostPurchaseData)(scriptUrl.toString(), extension))));
  } else if (publicUrl) {
    if (permalinkUrl && passwordPageUrl) {
      log('');
      log("If this is first time you are testing the extension, ");
      log("please login to your development store first by visiting");
      log(passwordPageUrl);
      log('');
      log("To create a checkout and test your extension please visit the following URL:");
      log(permalinkUrl);
    } else {
      log("Next, you\u2019ll need to create a checkout on your development shop and");
      log("append this query string to the first page of checkout: `?dev=".concat(publicUrl, "/query`"));
    }
  } else {
    log("next, run `shopify extension tunnel start --port=".concat(port, "` in a new terminal."));
    log("you\u2019ll then need to create a checkout on your development shop, and append this query string to the first page of checkout,");
    log("replacing TUNNEL_URL with your own ngrok URL: `?dev=https://TUNNEL_URL/query`");
  }
}