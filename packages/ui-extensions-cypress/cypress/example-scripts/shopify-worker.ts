/* eslint-disable */

console.warn('HELLO FROM WORKER.JS')

/**
 * Log messages coming from host
 */
addEventListener("message", ({ data }) => {
  if (data == null) {
    return;
  }

  if (data.__replace instanceof MessagePort) {
    const messenger = data.__replace;
    messenger.addEventListener("message", ({ data }) => {
      console.log("Client: receive message from host", data);
    });
  }
});

/**
 * This is an umd build of worker.js in remote-ui.
 * The endpoint will be exposed to self object after running this script.
 * Scroll to bottom to expose apis
 * See:
 * - https://github.com/Shopify/remote-ui/blob/858e39419b10499fdf9f11b9911c9e951e3bbd1b/packages/web-workers/src/babel-plugin.ts
 * - https://github.com/Shopify/remote-ui/blob/858e39419b10499fdf9f11b9911c9e951e3bbd1b/packages/web-workers/src/wrappers/expose.js.raw
 * - https://github.com/Shopify/remote-ui/blob/858e39419b10499fdf9f11b9911c9e951e3bbd1b/packages/web-workers/src/worker.ts
 *
 */

// import { createEndpoint } from "@remote-ui/rpc";

// /**
//  * The worker endpoint is created with self by default
//  * However, self will be replaced with a message channel port connected
//  * with the host
//  */
// const endpoint = createEndpoint(self);

!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.argoAdminHost = t())
    : (e.argoAdminHost = t());
})(self, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p =
        "https://cdn.shopify.com/shopifycloud/web/assets/v1/argo-admin-host/"),
      n((n.s = 1))
    );
  })([
    function (e, t, n) {
      e.exports = n(3);
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0);
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.endpoint = void 0);
      var r = n(4);
      const o = (0, r.createEndpoint)((0, r.fromWebWorker)(self), {
        callable: []
      });
      (t.endpoint = o),
        self.addEventListener("message", ({ data: e }) => {
          null != e &&
            e.__replace instanceof MessagePort &&
            (o.replace(e.__replace), e.__replace.start());
        }),
        Object.defineProperty(self, "endpoint", {
          value: o,
          enumerable: !1,
          writable: !1,
          configurable: !0
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "createEndpoint", function () {
          return f;
        }),
        n.d(t, "createBasicEncoder", function () {
          return l;
        }),
        n.d(t, "fromMessagePort", function () {
          return m;
        }),
        n.d(t, "fromWebWorker", function () {
          return y;
        }),
        n.d(t, "retain", function () {
          return s;
        }),
        n.d(t, "release", function () {
          return u;
        }),
        n.d(t, "StackFrame", function () {
          return c;
        }),
        n.d(t, "RELEASE_METHOD", function () {
          return o;
        }),
        n.d(t, "RETAIN_METHOD", function () {
          return r;
        }),
        n.d(t, "RETAINED_BY", function () {
          return a;
        });
      const r = Symbol.for("RemoteUi::Retain"),
        o = Symbol.for("RemoteUi::Release"),
        a = Symbol.for("RemoteUi::RetainedBy");
      class c {
        constructor() {
          var e, t, n;
          (e = this),
            (t = "memoryManaged"),
            (n = new Set()),
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n);
        }
        add(e) {
          this.memoryManaged.add(e), e[a].add(this), e[r]();
        }
        release() {
          for (const e of this.memoryManaged) e[a].delete(this), e[o]();
          this.memoryManaged.clear();
        }
      }
      function i(e) {
        return Boolean(e && e[r] && e[o]);
      }
      function s(e, { deep: t = !0 } = {}) {
        const n = i(e);
        if ((n && e[r](), t)) {
          if (Array.isArray(e))
            return e.reduce((e, n) => s(n, { deep: t }) || e, n);
          if ("object" == typeof e && null != e)
            return Object.keys(e).reduce(
              (n, r) => s(e[r], { deep: t }) || n,
              n
            );
        }
        return n;
      }
      function u(e, { deep: t = !0 } = {}) {
        const n = i(e);
        if ((n && e[o](), t)) {
          if (Array.isArray(e))
            return e.reduce((e, n) => u(n, { deep: t }) || e, n);
          if ("object" == typeof e && null != e)
            return Object.keys(e).reduce(
              (n, r) => u(e[r], { deep: t }) || n,
              n
            );
        }
        return n;
      }
      function l(e) {
        const t = new Map(),
          n = new Map(),
          s = new Map();
        return {
          encode: function r(o) {
            if ("object" == typeof o) {
              if (null == o) return [o];
              const e = [];
              if (Array.isArray(o)) {
                return [
                  o.map((t) => {
                    const [n, o = []] = r(t);
                    return e.push(...o), n;
                  }),
                  e
                ];
              }
              return [
                Object.keys(o).reduce((t, n) => {
                  const [a, c = []] = r(o[n]);
                  return e.push(...c), { ...t, [n]: a };
                }, {}),
                e
              ];
            }
            if ("function" == typeof o) {
              if (t.has(o)) {
                return [{ "_@f": t.get(o) }];
              }
              const r = e.uuid();
              return t.set(o, r), n.set(r, o), [{ "_@f": r }];
            }
            return [o];
          },
          decode: u,
          async call(e, t) {
            const r = new c(),
              o = n.get(e);
            if (null == o)
              throw new Error(
                "You attempted to call a function that was already released."
              );
            try {
              const e = i(o) ? [r, ...o[a]] : [r];
              return await o(...u(t, e));
            } finally {
              r.release();
            }
          },
          release(e) {
            const r = n.get(e);
            r && (n.delete(e), t.delete(r));
          },
          terminate() {
            t.clear(), n.clear(), s.clear();
          }
        };
        function u(t, n) {
          if ("object" == typeof t) {
            if (null == t) return t;
            if (Array.isArray(t)) return t.map((e) => u(e, n));
            if ("_@f" in t) {
              const c = t["_@f"];
              if (s.has(c)) return s.get(c);
              let i = 0,
                u = !1;
              const l = () => {
                  (i -= 1), 0 === i && ((u = !0), s.delete(c), e.release(c));
                },
                f = () => {
                  i += 1;
                },
                d = new Set(n),
                p = (...t) => {
                  if (u)
                    throw new Error(
                      "You attempted to call a function that was already released."
                    );
                  if (!s.has(c))
                    throw new Error(
                      "You attempted to call a function that was already revoked."
                    );
                  return e.call(c, t);
                };
              Object.defineProperties(p, {
                [o]: { value: l, writable: !1 },
                [r]: { value: f, writable: !1 },
                [a]: { value: d, writable: !1 }
              });
              for (const e of d) e.add(p);
              return s.set(c, p), p;
            }
            return Object.keys(t).reduce(
              (e, r) => ({ ...e, [r]: u(t[r], n) }),
              {}
            );
          }
          return t;
        }
      }
      function f(e, { uuid: t = d, createEncoder: n = l, callable: r } = {}) {
        let o = !1,
          a = e;
        const i = new Map(),
          s = new Map(),
          u = (function (e, t) {
            let n;
            if (null == t) {
              if ("function" != typeof Proxy)
                throw new Error(
                  "You must pass an array of callable methods in environments without Proxies."
                );
              const t = new Map();
              n = new Proxy(
                {},
                {
                  get(n, r) {
                    if (t.has(r)) return t.get(r);
                    const o = e(r);
                    return t.set(r, o), o;
                  }
                }
              );
            } else {
              n = {};
              for (const r of t)
                Object.defineProperty(n, r, {
                  value: e(r),
                  writable: !1,
                  configurable: !0,
                  enumerable: !0
                });
            }
            return n;
          })(y, r),
          f = n({
            uuid: t,
            release(e) {
              p(3, [e]);
            },
            call(e, n, r) {
              const o = t(),
                a = b(o, r),
                [c, i] = f.encode(n);
              return p(5, [o, e, c], i), a;
            }
          });
        return (
          a.addEventListener("message", m),
          {
            call: u,
            replace(e) {
              const t = a;
              (a = e),
                t.removeEventListener("message", m),
                e.addEventListener("message", m);
            },
            expose(e) {
              for (const t of Object.keys(e)) {
                const n = e[t];
                "function" == typeof n ? i.set(t, n) : i.delete(t);
              }
            },
            callable(...e) {
              if (null != r)
                for (const t of e)
                  Object.defineProperty(u, t, {
                    value: y(t),
                    writable: !1,
                    configurable: !0,
                    enumerable: !0
                  });
            },
            terminate() {
              w(), a.terminate ? a.terminate() : p(2, []);
            }
          }
        );
        function p(e, t, n) {
          a.postMessage([e, t], n);
        }
        async function m(e) {
          const { data: t } = e;
          if (null != t && Array.isArray(t))
            switch (t[0]) {
              case 2:
                w();
                break;
              case 0: {
                const e = new c(),
                  [n, r, o] = t[1],
                  a = i.get(r);
                try {
                  if (null == a)
                    throw new Error(
                      `No '${r}' method is exposed on this endpoint`
                    );
                  const [t, c] = f.encode(await a(...f.decode(o, [e])));
                  p(1, [n, void 0, t], c);
                } catch (e) {
                  const { name: t, message: r, stack: o } = e;
                  p(1, [n, { name: t, message: r, stack: o }]);
                } finally {
                  e.release();
                }
                break;
              }
              case 1: {
                const [e] = t[1];
                s.get(e)(...t[1]), s.delete(e);
                break;
              }
              case 3: {
                const [e] = t[1];
                f.release(e);
                break;
              }
              case 6: {
                const [e] = t[1];
                s.get(e)(...t[1]), s.delete(e);
                break;
              }
              case 5: {
                const [e, n, r] = t[1];
                try {
                  const t = await f.call(n, r),
                    [o, a] = f.encode(t);
                  p(6, [e, void 0, o], a);
                } catch (t) {
                  const { name: n, message: r, stack: o } = t;
                  p(6, [e, { name: n, message: r, stack: o }]);
                }
                break;
              }
            }
        }
        function y(e) {
          return (...n) => {
            if (o)
              throw new Error(
                "You attempted to call a function on a terminated web worker."
              );
            if ("string" != typeof e && "number" != typeof e)
              throw new Error(
                "Can’t call a symbol method on a remote endpoint: " +
                  e.toString()
              );
            const r = t(),
              a = b(r),
              [c, i] = f.encode(n);
            return p(0, [r, e, c], i), a;
          };
        }
        function b(e, t) {
          return new Promise((n, r) => {
            s.set(e, (e, o, a) => {
              if (null == o) n(a && f.decode(a, t));
              else {
                const e = new Error();
                Object.assign(e, o), r(e);
              }
            });
          });
        }
        function w() {
          var e;
          (o = !0),
            i.clear(),
            s.clear(),
            null === (e = f.terminate) || void 0 === e || e.call(f),
            a.removeEventListener("message", m);
        }
      }
      function d() {
        return `${p()}-${p()}-${p()}-${p()}`;
      }
      function p() {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
      }
      function m(e) {
        return {
          postMessage: (...t) => e.postMessage(...t),
          addEventListener: (...t) => e.addEventListener(...t),
          removeEventListener: (...t) => e.removeEventListener(...t),
          terminate() {
            e.close();
          }
        };
      }
      function y(e) {
        return e;
      }
    }
  ]);
});

/**
 * Exposing shopify api for external script
 */
const registeredExtensions = new Map();
const shopify = {
  extend(extensionPoint, callback) {
    registeredExtensions.set(extensionPoint, callback);
  }
};
Object.assign(self, { shopify });

/**
 * Expose apis for the host
 */
const api = {
  load(scriptUrl) {
    console.warn('running LOAD')
    importScripts(scriptUrl);
    console.log(`Loaded ${scriptUrl} inside worker`);
  },
  render(extensionPoint, api) {
    const callback = registeredExtensions.get(extensionPoint);
    if (!callback) return false;

    callback(api);
    console.log(`Called registered callback for ${extensionPoint}`);
    return true;
  }
};

endpoint.expose(api);
console.warn('ENDPOINT EXPOSED', endpoint, api)

// export default { foo: 'bar' }

/**
 * Restrict globals
 */

try {
  Object.defineProperties(self, "indexedDB", {
    value: undefined,
    configurable: false,
    enumerable: false,
    writable: false
  });
} catch(err) {
  console.log('Couldn\'t define indexedDB')
}
