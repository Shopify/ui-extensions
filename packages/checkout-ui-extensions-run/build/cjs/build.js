"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = build;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _webpack = _interopRequireDefault(require("webpack"));

var _brotliSize = _interopRequireDefault(require("brotli-size"));

var _gzipSize = _interopRequireDefault(require("gzip-size"));

var _prettyBytes = _interopRequireDefault(require("pretty-bytes"));

var _utilities = require("./utilities");

var _webpackConfig = require("./webpack-config");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function build() {
  return _build.apply(this, arguments);
}

function _build() {
  _build = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _len,
        args,
        _key,
        filename,
        outputPath,
        compiler,
        file,
        gzip,
        brotli,
        color,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _utilities.log)('Starting production build');

            for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args[_key];
            }

            filename = getFileNameFromArgs(args);
            outputPath = path.resolve('build');
            compiler = (0, _webpack["default"])((0, _webpackConfig.createWebpackConfiguration)({
              output: {
                path: outputPath,
                filename: filename
              }
            }));
            _context.prev = 5;
            _context.next = 8;
            return new Promise(function (resolve, reject) {
              compiler.run(function (error, stats) {
                if (error) {
                  reject(error);
                  return;
                }

                if (stats.hasErrors()) {
                  reject(new Error(stats.toString('errors-only')));
                }

                resolve(stats);
              });
            });

          case 8:
            file = fs.readFileSync(path.join(outputPath, filename));
            _context.next = 11;
            return (0, _gzipSize["default"])(file);

          case 11:
            gzip = _context.sent;
            _context.next = 14;
            return (0, _brotliSize["default"])(file);

          case 14:
            brotli = _context.sent;
            color = // eslint-disable-next-line no-nested-ternary
            file.length < 5000 ? _chalk["default"].green : file.length > 40000 ? _chalk["default"].red : _chalk["default"].yellow;
            (0, _utilities.log)("Build completed successfully");
            (0, _utilities.log)(color("size: ".concat((0, _prettyBytes["default"])(file.length), " / gzip: ").concat((0, _prettyBytes["default"])(gzip), " / brotli: ").concat((0, _prettyBytes["default"])(brotli))));
            _context.next = 25;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](5);
            (0, _utilities.log)('An error was thrown while building your extension:', {
              error: true
            }); // eslint-disable-next-line no-console

            console.error(_context.t0);
            process.exitCode = 1;

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 20]]);
  }));
  return _build.apply(this, arguments);
}

var DEFAULT_FILE_NAME = 'main';

function getFileNameFromArgs(args) {
  var _namedArgument;

  var filename = (_namedArgument = (0, _utilities.namedArgument)('filename', args)) !== null && _namedArgument !== void 0 ? _namedArgument : DEFAULT_FILE_NAME;
  return filename.endsWith('.js') ? filename : "".concat(filename, ".js");
}