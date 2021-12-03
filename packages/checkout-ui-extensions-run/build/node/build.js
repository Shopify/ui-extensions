"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = build;

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _webpack = _interopRequireDefault(require("webpack"));

var _brotliSize = _interopRequireDefault(require("brotli-size"));

var _gzipSize = _interopRequireDefault(require("gzip-size"));

var _prettyBytes = _interopRequireDefault(require("pretty-bytes"));

var _utilities = require("./utilities");

var _webpackConfig = require("./webpack-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function build(...args) {
  (0, _utilities.log)('Starting production build');
  const filename = getFileNameFromArgs(args);
  const outputPath = path.resolve('build');
  const compiler = (0, _webpack.default)((0, _webpackConfig.createWebpackConfiguration)({
    output: {
      path: outputPath,
      filename
    }
  }));

  try {
    await new Promise((resolve, reject) => {
      compiler.run((error, stats) => {
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
    const file = fs.readFileSync(path.join(outputPath, filename));
    const gzip = await (0, _gzipSize.default)(file);
    const brotli = await (0, _brotliSize.default)(file);
    const color = // eslint-disable-next-line no-nested-ternary
    file.length < 5000 ? _chalk.default.green : file.length > 40000 ? _chalk.default.red : _chalk.default.yellow;
    (0, _utilities.log)(`Build completed successfully`);
    (0, _utilities.log)(color(`size: ${(0, _prettyBytes.default)(file.length)} / gzip: ${(0, _prettyBytes.default)(gzip)} / brotli: ${(0, _prettyBytes.default)(brotli)}`));
  } catch (error) {
    (0, _utilities.log)('An error was thrown while building your extension:', {
      error: true
    }); // eslint-disable-next-line no-console

    console.error(error);
    process.exitCode = 1;
  }
}

const DEFAULT_FILE_NAME = 'main';

function getFileNameFromArgs(args) {
  var _namedArgument;

  const filename = (_namedArgument = (0, _utilities.namedArgument)('filename', args)) !== null && _namedArgument !== void 0 ? _namedArgument : DEFAULT_FILE_NAME;
  return filename.endsWith('.js') ? filename : `${filename}.js`;
}