"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        case 'build': {
            command = Command.Build;
            args = allArgs.slice(1);
            break;
        }
        case 'serve':
        case 'dev': {
            command = Command.Dev;
            args = allArgs.slice(1);
            break;
        }
        default: {
            command = Command.Dev;
            args = allArgs;
        }
    }
    switch (command) {
        case Command.Build: {
            const { build } = await Promise.resolve().then(() => __importStar(require('./build')));
            await build(...args);
            break;
        }
        case Command.Dev: {
            const { dev } = await Promise.resolve().then(() => __importStar(require('./dev')));
            await dev(...args);
            break;
        }
    }
}
