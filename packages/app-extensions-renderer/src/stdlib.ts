import {DataSource} from '.';

export default function(dataSource: DataSource) {
  const library = {
    get: dataSource.get,
    set: dataSource.set,

    if: (condition, trueCase, falseCase?) => (condition ? trueCase : falseCase),

    '#'(...args: any[]) {
      const obj: {[key: string]: any} = {};
      for (let i = 0; i < args.length; i += 2) {
        const [key, value] = [i, i + 1];
        obj[args[key]] = args[value];
      }
      return obj;
    },

    alert: (message: string) => () => {
      alert(message);
    },

    log(...args: any[]) {
      console.log(...args);
      return args;
    },

    true: true,

    false: false,
  };

  return library;
}
