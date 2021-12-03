"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var _api$container = api.container,
      close = _api$container.close,
      done = _api$container.done,
      setPrimaryAction = _api$container.setPrimaryAction,
      setSecondaryAction = _api$container.setSecondaryAction;
  setPrimaryAction({
    content: 'Add to plan',
    onAction: function () {
      var _onAction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('primary action pressed!');
                done();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onAction() {
        return _onAction.apply(this, arguments);
      }

      return onAction;
    }()
  });
  setSecondaryAction({
    content: 'Cancel',
    onAction: function onAction() {
      console.log('secondary action pressed!');
      close();
    }
  });
  var text = root.createText('hi!');
  root.appendChild(text);
  root.mount();
});