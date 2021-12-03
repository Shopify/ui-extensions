"use strict";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Command;

(function (Command) {
  Command[Command["Build"] = 0] = "Build";
  Command[Command["Dev"] = 1] = "Dev";
})(Command || (Command = {}));

run();

async function run() {
  const allArgs = process.argv.slice(2);
  let command;
  let args;

  switch (allArgs[0]) {
    case 'build':
      {
        command = Command.Build;
        args = allArgs.slice(1);
        break;
      }

    case 'serve':
    case 'dev':
      {
        command = Command.Dev;
        args = allArgs.slice(1);
        break;
      }

    default:
      {
        command = Command.Dev;
        args = allArgs;
      }
  }

  switch (command) {
    case Command.Build:
      {
        const {
          build
        } = await Promise.resolve().then(() => _interopRequireWildcard(require('./build')));
        await build(...args);
        break;
      }

    case Command.Dev:
      {
        const {
          dev
        } = await Promise.resolve().then(() => _interopRequireWildcard(require('./dev')));
        await dev(...args);
        break;
      }
  }
}