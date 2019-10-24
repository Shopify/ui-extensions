import { DataSource } from "./useDataSource";

type Callback = (response: any) => void

export default function(
  dataSource: DataSource,
  onWorkerAction:
    (id: string, callback: Callback) => void) {
  const library = {
    "#"(...args: any[]) {
      const obj: { [key: string]: any } = {};
      for (let i = 0; i < args.length; i += 2) {
        const [key, value] = [i, i + 1];
        obj[args[key]] = args[value];
      }
      return obj;
    },

    "alert": (message: string) => () => {
      alert(message);
    },

    "log"(...args: any[]) {
      console.log(...args);
      return args;
    },

    "true": true,

    "false": false,

    "script": (url: string) => (value: string) => {
      const worker = new Worker(url);
      return new Promise((resolve, reject) => {
        worker.onmessage = ({ data }) => resolve(data);
        worker.postMessage(value);
      });
    },

    "string-join": (...strings: string[]) => strings.reduce((buf, s) => buf + s, ""),

    // "get"(key: string, path?: any) {
    //   const entry = dataSource.value.find((f) => f.key === key);
    //   return entry ? (path ? entry.value[path] : entry.value) : undefined;
    // },

    "get"(key: string) {
      const value = dataSource.value[key];
      if(value === 'true') return true;
      if(value === 'false') return false;
      return dataSource.value[key];
    },

    // Will need to be adjusted
    "set": (key: string) => (value: any) => {
      const entries = [...dataSource.value];
      const entryIndex = dataSource.value.findIndex((f) => f.key === key);

      if (entryIndex !== -1) {
        entries.splice(entryIndex, 1, {
          ...dataSource.value[entryIndex],
          value,
        });
      } else {
        entries.push({
          key,
          value,
        });
      }

      dataSource.onChange(entries);
    },

    "watch": (key: string, expression: any) => {
      // useEffect(() => {
      //   expression(library.get(key));
      // }, [library.get(key)]);
    },

    "http-request": (httpMethod: string, url: string, callback: (response: any) => void) => {
      fetch(url).then((response) => response.json()).then(callback);
    },

    'sFunction': (id: string, callback: Callback) => (value) => {
      const isPrimitive = typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
      // @ts-ignore
      onWorkerAction(id, callback, isPrimitive ? value : String(value));
    }
  };

  return library;
}
