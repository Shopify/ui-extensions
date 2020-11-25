#!/usr/bin/env node

import yargs from 'yargs';

import {build} from './build';
import {server} from './server';

(async function run() {
  return yargs
    .command(
      'server',
      'run local server',
      (_yargs) =>
        _yargs.options({
          type: {type: 'string', demandOption: true},
          entry: {type: 'string', demandOption: true},
          port: {type: 'number', demandOption: true},
          env: {type: 'string'},
        }),
      server,
    )
    .command(
      'build',
      'build project',
      (_yargs) =>
        _yargs.options({
          entry: {type: 'string', demandOption: true},
          env: {type: 'string'},
          output: {type: 'string'},
          watch: {type: 'boolean'},
        }),
      build,
    )
    .strict().argv;
})();
