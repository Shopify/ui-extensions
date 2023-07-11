/**
 * The CDN version of Bugsnag requires this polyfill.
 */
(() => {
  const document = {
    documentElement: {
      outerHTML: '',
      createElement: () => ({}),
      clientWidth: 0,
      clientHeight: 0,
    },
    addEventListener: () => {},
  };
  const history = {};
  const window = self;
  self.window = window;
  window.document = document;
  window.history = history;
})();
