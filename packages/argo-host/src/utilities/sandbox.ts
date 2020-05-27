export interface Blacklist {
  [key: string]: boolean;
}

export const builtIns: Blacklist = {
  // Network
  XMLHttpRequest: true,
  // Other
  eval: true,
  importScripts: true,
};

function clobber(object: Object, blacklist: Blacklist) {
  let target = object;
  do {
    Object.getOwnPropertyNames(target).forEach(key => {
      if (!blacklist[key]) {
        return;
      }
      try {
        Object.defineProperty(target, key, {
          value: undefined,
          configurable: false,
          enumerable: false,
          writable: false,
        });
      } catch (_) {}
    });
    target = Object.getPrototypeOf(target);
  } while (target !== Object.prototype);
}

export const apply = (workerGlobalScope: Object = self, blacklist: Blacklist = builtIns) => {
  clobber(workerGlobalScope, blacklist);
};
