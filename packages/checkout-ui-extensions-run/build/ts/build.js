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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const webpack_1 = __importDefault(require("webpack"));
const brotli_size_1 = __importDefault(require("brotli-size"));
const gzip_size_1 = __importDefault(require("gzip-size"));
const pretty_bytes_1 = __importDefault(require("pretty-bytes"));
const utilities_1 = require("./utilities");
const webpack_config_1 = require("./webpack-config");
async function build(...args) {
    utilities_1.log('Starting production build');
    const filename = getFileNameFromArgs(args);
    const outputPath = path.resolve('build');
    const compiler = webpack_1.default(webpack_config_1.createWebpackConfiguration({
        output: { path: outputPath, filename },
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
        const gzip = await gzip_size_1.default(file);
        const brotli = await brotli_size_1.default(file);
        const color = 
        // eslint-disable-next-line no-nested-ternary
        file.length < 5000
            ? chalk_1.default.green
            : file.length > 40000
                ? chalk_1.default.red
                : chalk_1.default.yellow;
        utilities_1.log(`Build completed successfully`);
        utilities_1.log(color(`size: ${pretty_bytes_1.default(file.length)} / gzip: ${pretty_bytes_1.default(gzip)} / brotli: ${pretty_bytes_1.default(brotli)}`));
    }
    catch (error) {
        utilities_1.log('An error was thrown while building your extension:', { error: true });
        // eslint-disable-next-line no-console
        console.error(error);
        process.exitCode = 1;
    }
}
exports.build = build;
const DEFAULT_FILE_NAME = 'main';
function getFileNameFromArgs(args) {
    var _a;
    const filename = (_a = utilities_1.namedArgument('filename', args)) !== null && _a !== void 0 ? _a : DEFAULT_FILE_NAME;
    return filename.endsWith('.js') ? filename : `${filename}.js`;
}
