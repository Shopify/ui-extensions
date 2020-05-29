export interface Blacklist {
  [key: string]: boolean | Function;
}

export const builtIns: Blacklist = {
  // Network
  XMLHttpRequest: true,
  // Other
  Function: () => () => {
    // noop
  },
  eval: true,
  importScripts: true,
};

function clobber(object: Object, blacklist: Blacklist) {
  let target = object;
  do {
    Object.getOwnPropertyNames(target)
      .filter(key => blacklist[key])
      .forEach(key => {
        try {
          Object.defineProperty(target, key, {
            value: blacklist[key] === true ? undefined : blacklist[key],
            configurable: false,
            enumerable: false,
            writable: false,
          });
        } catch (_) {}
      });
    target = Object.getPrototypeOf(target);
  } while (target !== Object.prototype);
}

export const apply = (workerGlobalScope: Object, blacklist: Blacklist = builtIns) => {
  clobber(workerGlobalScope, blacklist);
};
