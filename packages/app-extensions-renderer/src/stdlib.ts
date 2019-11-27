import {DataSource} from '.';

type Callback = (response: any) => void;

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

    script: (url: string) => (value: string) => {
      const worker = new Worker(url);
      return new Promise((resolve, reject) => {
        worker.onmessage = ({data}) => resolve(data);
        worker.postMessage(value);
      });
    },

    'string-join': (...strings: string[]) => strings.reduce((buf, s) => buf + s, ''),

    watch: (key: string, expression: any) => {
      // useEffect(() => {
      //   expression(library.get(key));
      // }, [library.get(key)]);
    },

    'http-request': (httpMethod: string, url: string, callback: (response: any) => void) => {
      fetch(url)
        .then(response => response.json())
        .then(callback);
    },
  };

  return library;
}
