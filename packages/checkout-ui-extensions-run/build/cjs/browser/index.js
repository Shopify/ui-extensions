"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openBrowser = openBrowser;

var _child_process = require("child_process");

var _open = _interopRequireDefault(require("open"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// https://github.com/sindresorhus/open#app
var OSX_CHROME = 'google chrome';

function openBrowser(url) {
  var browser = process.env.BROWSER;
  var args = process.env.BROWSER_ARGS ? process.env.BROWSER_ARGS.split(' ') : [];
  return startBrowserProcess.apply(void 0, [browser, url].concat(_toConsumableArray(args)));
}

function startBrowserProcess(browser, url) {
  // If we're on OS X, the user hasn't specifically
  // requested a different browser, we can try opening
  // Chrome with AppleScript. This lets us reuse an
  // existing tab when possible instead of creating a new one.
  var shouldTryOpenChromiumWithAppleScript = process.platform === 'darwin' && (typeof browser !== 'string' || browser === OSX_CHROME);

  if (shouldTryOpenChromiumWithAppleScript) {
    // Will use the first open browser found from list
    var supportedChromiumBrowsers = ['Google Chrome Canary', 'Google Chrome', 'Microsoft Edge', 'Brave Browser', 'Vivaldi', 'Chromium'];

    for (var _i = 0, _supportedChromiumBro = supportedChromiumBrowsers; _i < _supportedChromiumBro.length; _i++) {
      var chromiumBrowser = _supportedChromiumBro[_i];

      try {
        // Try our best to reuse existing tab
        // on OSX Chromium-based browser with AppleScript
        (0, _child_process.execSync)("ps cax | grep \"".concat(chromiumBrowser, "\""));
        (0, _child_process.execSync)("osascript openChrome.applescript \"".concat(encodeURI(url), "\" \"").concat(chromiumBrowser, "\""), {
          cwd: __dirname,
          stdio: 'ignore'
        });
        return true;
      } catch (_unused) {// Ignore errors.
      }
    }
  }

  var openArguments = browser; // Another special case: on OS X, check if BROWSER has been set to "open".
  // In this case, instead of passing `open` to `opn` (which won't work),
  // just ignore it (thus ensuring the intended behavior, i.e. opening the system browser):
  // https://github.com/facebook/create-react-app/pull/1690#issuecomment-283518768

  if (process.platform === 'darwin' && openArguments === 'open') {
    openArguments = undefined;
  } // If there are arguments, they must be passed as array with the browser


  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (typeof openArguments === 'string' && args.length > 0) {
    openArguments = [openArguments].concat(args);
  } // Fallback to open
  // (It will always open new tab)


  try {
    var options = {
      app: browser,
      wait: false,
      url: true
    }; // squelch errors

    (0, _open["default"])(url, options)["catch"](function () {});
    return true;
  } catch (_unused2) {
    return false;
  }
}