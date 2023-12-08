import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Error handling',
  description:
    'You can use standard web techniques to handle errors in [customer account UI extensions](/api/customer-account-ui-extensions/) but you may need to account for how they run inside of a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).',
  id: 'error-handling',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'handling-any-error',
      title: 'Handling any error',
      sectionContent:
        'Add an `unhandledrejection` listener for promise rejections or an `error` listener for other exceptions like Javascript runtime errors or failures to load a resource.',
      codeblock: {
        title: 'Handling any error',
        tabs: [
          {
            code: './examples/error-handling/handling-any-error.example.ts',
            language: 'ts',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'third-party-libraries',
      title: 'Third party libraries',
      sectionContent: `
You can use error reporting libraries like [Bugsnag](https://www.bugsnag.com/) or [Sentry](https://sentry.io/). However, they might require extra configuration because UI extensions run inside of a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

> Tip:
> You must request [network access](/api/customer-account-ui-extensions/configuration#network-access) to transmit errors to a third party service.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'sentry',
      title: 'Sentry (recommended)',
      sectionContent: `
Initialize Sentry following their [Web Worker guide](https://docs.sentry.io/platforms/javascript/configuration/webworkers/). We recommend disabling the default integrations to be sure it will run within a Web Worker. You'll need to add event listeners manually.

If you are writing your UI extension in React, you can follow Sentry's [React integration guide](https://docs.sentry.io/platforms/javascript/guides/react/) to get additional context on errors thrown while rendering your components. Integrations like tracing do not currently run in Web Workers ([issue](https://github.com/getsentry/sentry-javascript/issues/5289)).`,
      codeblock: {
        title: 'Sentry',
        tabs: [
          {
            code: './examples/error-handling/sentry.example.tsx',
            language: 'ts',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'bugsnag',
      title: 'Bugsnag',
      sectionContent: `
Follow [Bugsnag's documentation](https://docs.bugsnag.com/platforms/javascript/) to install it for your extension. Bugsnag adds event listeners by default so there's no need to add them manually.

If you use the [CDN version](https://docs.bugsnag.com/platforms/javascript/cdn-guide/), you'll need to add polyfill code (see example) before importing Bugsnag because it tries to access some variables that are not available in Web Workers ([details](https://github.com/bugsnag/bugsnag-js/issues/1506)).

If you are writing your UI extension in React, you can follow Bugsnag's [React integration guide](https://docs.bugsnag.com/platforms/javascript/legacy/react/) to get additional context on errors thrown while rendering your components.`,
      codeblock: {
        title: 'Bugsnag',
        tabs: [
          {
            code: './examples/error-handling/bugsnag.example.ts',
            language: 'ts',
          },
        ],
      },
    },
  ],
};

export default data;
