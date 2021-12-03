"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIExtensionsHotClient = void 0;

var _webpack = require("webpack");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// eslint-disable-next-line @typescript-eslint/no-var-requires
var ParserHelpers = require('webpack/lib/ParserHelpers'); // @see https://github.com/webpack-contrib/webpack-hot-client/blob/1b7f221918217be0db7a6089fb77fffde9a973f6/lib/compiler.js#L63


var UIExtensionsHotClient = /*#__PURE__*/function () {
  function UIExtensionsHotClient(options) {
    _classCallCheck(this, UIExtensionsHotClient);

    this.options = options;
  }

  _createClass(UIExtensionsHotClient, [{
    key: "apply",
    value: function apply(compiler) {
      var options = this.options;

      if (options) {
        var definePlugin = new _webpack.DefinePlugin({
          __hotClientOptions__: JSON.stringify(options)
        });
        definePlugin.apply(compiler);
      }

      var hmrPlugin = new _webpack.HotModuleReplacementPlugin();
      compiler.hooks.compilation.tap('HotModuleReplacementPlugin', function (_, _ref) {
        var normalModuleFactory = _ref.normalModuleFactory;

        var handler = function handler(parser) {
          parser.hooks.evaluateIdentifier["for"]('module.hot').tap({
            name: 'HotModuleReplacementPlugin',
            before: 'NodeStuffPlugin'
          }, function (expr) {
            return ParserHelpers.evaluateToIdentifier('module.hot', Boolean(parser.state.compilation.hotUpdateChunkTemplate))(expr);
          });
        };

        normalModuleFactory.hooks.parser["for"]('javascript/auto').tap('HotModuleReplacementPlugin', handler);
        normalModuleFactory.hooks.parser["for"]('javascript/dynamic').tap('HotModuleReplacementPlugin', handler);
      });
      hmrPlugin.apply(compiler);
    }
  }]);

  return UIExtensionsHotClient;
}();

exports.UIExtensionsHotClient = UIExtensionsHotClient;