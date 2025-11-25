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
        title: 'Example',
        tabs: [
          {
            code: './examples/error-handling/handling-any-error.example.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'third-party-libraries',
      title: 'Third party libraries',
      sectionContent: `
You can use error reporting libraries like [Sentry](https://sentry.io/). However, they might require extra configuration because UI extensions run inside of a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

> Tip:
> You must request [network access](/api/customer-account-ui-extensions/configuration#network-access) to transmit errors to a third party service.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'sentry',
      title: 'Sentry',
      sectionContent: `
 Install and initialize Sentry following their [Browser JavaScript guide](https://docs.sentry.io/platforms/javascript/). We recommend disabling the default integrations to be sure it will run within a Web Worker. You'll need to add event listeners manually.`,
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/error-handling/sentry.example.jsx',
            language: 'jsx',
          },
        ],
      },
    },
  ],
};

export default data;
