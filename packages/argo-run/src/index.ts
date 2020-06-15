enum Command {
  Build,
  Dev,
  Serve,
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
    case 'dev': {
      command = Command.Dev;
      args = allArgs.slice(1);
      break;
    }
    case 'server': {
      command = Command.Serve;
      args = allArgs.slice(1);
      break;
    }
    default: {
      command = Command.Serve;
      args = allArgs;
    }
  }

  switch (command) {
    case Command.Build: {
      const {build} = await import('./build');
      await build(...args);
      break;
    }
    case Command.Serve: {
      const {serve} = await import('./serve');
      await serve(...args);
      break;
    }
    case Command.Dev: {
      const {dev} = await import('./dev');
      await dev(...args);
      break;
    }
  }
}
