enum Command {
  Build,
  Dev,
}

run();

async function run() {
  const allArgs = process.argv.slice(2);

  let command: Command;
  let args: string[];

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
      const {build} = await import('./build');
      await build(...args);
      break;
    }
    case Command.Dev: {
      const {dev} = await import('./dev');
      await dev(...args);
      break;
    }
  }
}

export {};
