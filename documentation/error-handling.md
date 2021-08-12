# Error handling

UI extensions support standard web errors. You can add `unhandledrejection` listener for unhandled promise rejections or `error` listener for other exceptions like Javascript runtime error or a resource fails to load.

```javascript
// For unhandled promise rejections
self.addEventListener('unhandledrejection', (error) => {
  console.warn('event unhandledrejection', error);
});

// For other exceptions
self.addEventListener('error', (error) => {
  console.warn('event error', error);
});
```

## Reporting errors

It's possible to use 3rd party libaries for reporting errors like Bugsnag or Sentry. However, it might require some extra configs or setup depending on which libraries you are using because UI extensions are run inside WebWorker.

### Sentry (recommended)

Follow [Sentry documentation](https://docs.sentry.io/platforms/javascript/) to install it to your extension. There is no polyfill required for using Sentry. However, Sentry does not add any event listeners out of the box. So, you need to add them manually.

```javascript
/**
 * Add error handlers
 */
self.addEventListener('unhandledrejection', (error) => {
  Sentry.captureException(new Error(error.reason.stack));
});

self.addEventListener('error', (error) => {
  Sentry.captureException(new Error(error.reason.stack));
});
```

If you are writing your UI extensions in React, you can follow Sentry's [React integration guide](https://docs.sentry.io/platforms/javascript/guides/react/) to get additional context on errors thrown while rendering your components.

### Bugsnag

Follow [Bugsnag documentation](https://docs.bugsnag.com/platforms/javascript/) to install it to your extension. If you use [CDN version](https://docs.bugsnag.com/platforms/javascript/cdn-guide/), you need to add polyfill code below before importing Bugsnag because Bugsnag tries to access some variables that are not available in WebWorker ([issue here](https://github.com/bugsnag/bugsnag-js/issues/1506)).

```javascript
/**
 * CDN polyfill
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
```

There is no need to add custom event listeners as Bugsnag does it for you out of the box. If you are writing your UI extension in React, you can follow Bugsnag's [React integration guide](https://docs.bugsnag.com/platforms/javascript/legacy/react/) to get additional context on errors thrown while rendering your components.
