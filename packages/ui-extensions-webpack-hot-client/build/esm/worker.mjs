function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var options = __hotClientOptions__;
var MAX_RETRIES = 10;
run();

function run() {
  var _options$webSocket = options.webSocket,
      host = _options$webSocket.host,
      port = _options$webSocket.port,
      path = _options$webSocket.path;

  if (host === '*') {
    throw new Error("@shopify/ui-extensions-webpack-hot-client does not support setting the host to \"*\", because the window\u2019s location is not guaranteed to be available in a worker.");
  }

  var open = false;
  var initial = true;
  var retry = 0;
  var cleanupActions = new Set();
  connect();

  function cleanup() {
    var _iterator = _createForOfIteratorHelper(cleanupActions),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var action = _step.value;
        action();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    cleanupActions.clear();
  }

  function connect() {
    var socket = new WebSocket("".concat(options.https ? 'wss' : 'ws', "://").concat(host, ":").concat(port).concat(path));

    var handleOpen = function handleOpen() {
      open = true;
      initial = true;
      retry = 0;
      log('listening for changes...');
    };

    var handleClose = function handleClose() {
      cleanup();

      if (retry > MAX_RETRIES) {
        log("ending reconnect after ".concat(MAX_RETRIES, " attempts"));
        return;
      }

      if (open) {
        open = false;
        log('lost connection to asset server, trying to reconnect...');
        connect();
      } else {
        var timeout = 1000 * Math.pow(retry, 2) + Math.random() * 100;
        retry += 1;
        log("attempting reconnect in ".concat(timeout / 1000, "s"));
        setTimeout(function () {
          connect();
        }, timeout);
      }
    };

    var handleMessage = function handleMessage(event) {
      var message = JSON.parse(event.data);

      switch (message.type) {
        case 'ok':
        case 'warnings':
          {
            if (initial) {
              initial = false;
            } else {
              reload();
            }

            break;
          }

        case 'window-reload':
          {
            reload();
            break;
          }

        case 'invalid':
          {
            log('recompiling...');
            break;
          }

        case 'errors':
          {
            log('build failed with errors:');

            var _iterator2 = _createForOfIteratorHelper(message.data.errors),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var error = _step2.value;
                // eslint-disable-next-line no-console
                console.log(error);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            break;
          }
      }
    };

    socket.addEventListener('open', handleOpen);
    socket.addEventListener('close', handleClose);
    socket.addEventListener('message', handleMessage);
    cleanupActions.add(function () {
      socket.removeEventListener('open', handleOpen);
      socket.removeEventListener('close', handleClose);
      socket.removeEventListener('message', handleMessage);
      socket.close();
    });
  }

  function reload() {
    cleanup();
    self.shopify.reload();
  }
}

function log(message) {
  // eslint-disable-next-line no-console
  console.log("\uD83D\uDD2D > ".concat(message));
}

export {};